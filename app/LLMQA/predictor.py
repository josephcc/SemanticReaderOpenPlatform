from typing import List

import pysbd    # for splitting sentences
from tokreate import CallAction, ParseAction    # for callling LLMs

from papermage.magelib import Document, Entity, ParagraphsFieldName, SentencesFieldName
from papermage.predictors import BasePredictor


FULL_DOC_QA_ATTRIBUTED_PROMPT = '''
Answer a question using the provided scientific paper.
Your response should be a JSON object with the following fields:
  - answer: The answer to the question. The answer should use concise language, but be comprehensive. Only provide answers that are objectively supported by the text in paper.
  - excerpts: A list of one or more *EXACT* text spans extracted from the paper that support the answer. Return between at most ten spans, and no more that 800 words. Make sure to cover all aspects of the answer above.
If there is no answer, return an empty dictionary, i.e., `{}`.
Paper:
{{ full_text }}
Given the information above, please answer the question: "{{ question }}".
'''

FULL_DOC_QA_SYSTEM_JSON_PROMPT = '''
You are a helpful research assistant, answering questions about scientific papers accurately and concisely.
You ONLY respond to questions that have an objective answer, and return an empty response for subjective requests.
You always return a valid JSON object to each user request.
'''


class PaperQaPredictor(BasePredictor):
    """Predictor to perform attributed QA on scientific papers.

    Given a paper and a question, this predictor is designed to return an
    answer + supporting evidence in the form of excerpts from the paper.
    Under the hood, it uses a language model to generate a response in JSON
    format, and match the response to sentences in the paper.
    """

    def __init__(
        self,
        model_name: str = "gpt-3.5-turbo-16k",
        max_tokens: int = 2048,
        temperature: float = 0.3,
        task_prompt: str = FULL_DOC_QA_ATTRIBUTED_PROMPT,
        system_prompt: str = FULL_DOC_QA_SYSTEM_JSON_PROMPT,
    ):
        """Create a predictor to support attributed QA on scientific papers.

        Args:
            model_name (str, optional): The name of the model to use.
                Defaults to "gpt-3.5-turbo-16k". Anthropic, OpenAI, and
                TogetherAI models are supported.
            max_tokens (int, optional): The maximum number of tokens to use
                when generating a response. Defaults to 2048.
            temperature (float, optional): The temperature to use when
                generating a response. Lower temperatures will result in
                less creative responses, facilitating attribution. Defaults
                to 0.3.
        """

        # This chain of tokreate actions is responsible for calling the LLM
        # to get an answer and perform attribution, as well as parsing the
        # response into a JSON object.
        self.call = CallAction(
            prompt=task_prompt.strip(),
            system=system_prompt.strip(),
            model=model_name,
            parameters={"max_tokens": max_tokens, "temperature": temperature},
        ) >> ParseAction(name="json_parser", parser="json.loads")

        # the sentencizer will be used to split the response into sentences
        # in case one or more attribution spans are comprised of multiple
        # sentences.
        self.sentencizer = pysbd.Segmenter(language="en", clean=False)

    @property
    def REQUIRED_DOCUMENT_FIELDS(self) -> List[str]:
        """This predictor requires paragraphs and sentences to be
        attached to the document."""
        return [ParagraphsFieldName, SentencesFieldName]

    def _predict(self, doc: Document, question: str) -> List[Entity]:
        full_text = ""
        sents_text = []
        sents_ids = []

        # Before we can call the LLM, we need a flat textual representation
        # of the document to provide during API call.
        # As we are iterating over the sentences, we also create a vector
        for i, paragraph in enumerate(doc.paragraphs):

            # we check if the paragraph has a header, and if so, we add it
            # to to the full text representation of the document.
            header = getattr(paragraph.metadata, "header_text", None)
            for j, sent in enumerate(paragraph.sentences):
                if j == 0 and header:
                    # add header before first sentence if it exists
                    full_text += f"\n\n## {header}\n"
                else:
                    full_text += "\n\n"

                full_text += f"{sent.text.strip()} "

                # We need to keep track of the original sentence text and id
                # so that if the LLM returns a span corresponding to this
                # sentence, we can return the entity matching it.
                sents_ids.append((i, j))
                sents_text.append(sent.text.strip())
            full_text.strip()

        # here, we call the LLM to get an answer and attribution;
        # the tokreate chain returns a history of calls, and the output
        # we need is the last one.
        *_, output = self.call.run(full_text=full_text, question=question)
        parsed_output = output.state["json_parser"]

        # this is the abstractive answer returned by the LLM in response
        # to the question.
        answer = parsed_output["answer"]

        if not parsed_output:
            # the model could not answer the question
            return []

        # we parse out sentences in each excerpt returned by the LLM in
        # support of the provided answer.
        excerpts = [
            s for e in parsed_output.get("excerpts", [])
            for s in self.sentencizer.segment(e)
        ]

        extracted_excerpts: List[Entity] = []
        for ex_text in excerpts:
            # we need to find the sentence in the document that matches
            # the excerpt returned by the LLM.
            matched_ex = [i for i, s in enumerate(sents_text) if ex_text in s]
            if not matched_ex:
                # could not match the excerpt returned by the LLM to a sentence
                # in the document.
                continue

            # get the location of the matched sentence in the document
            par_id, sent_id = sents_ids[matched_ex[0]]
            matched_sent = doc.paragraphs[par_id].sentences[sent_id]

            # we create a new entity that is a copy of the matched sentence
            # plus the answer generated by the LLM.
            new_sent_to_return = Entity.from_json(matched_sent.to_json())
            new_sent_to_return.metadata.answer = answer
            extracted_excerpts.append(new_sent_to_return)

        # return the list of sentences that support the answer;
        # each one will have the generated answer included in the metadata.
        return extracted_excerpts
