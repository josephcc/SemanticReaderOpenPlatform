# Paper Plain Demo

This is a short doc explaining the features of the Paper Plain demo. It includes examples of how the demo UI is implemented with the [pdf-components library](https://github.com/allenai/pdf-component-library) and how the demo processes PDFs with the [papermage library](https://github.com/allenai/papermage). Both libraries are publicly avaliable. 

The majority of this readme will be describing PDF processing and custom react UI components built using the pdf-components library. 


## Getting Started

Install by executing `npm install @allenai/pdf-components`.
Refer to the `ui/demo` directory for examples of how to import the components.


### Running the Demo Locally
To start a version of the application locally for development purposes, run
this command:

```bash
~ docker-compose up --build
```

This process launches 3 services, the `ui`, `proxy` responsible
for forwarding traffic to the appropriate services, and an `api`. You'll see output
from each.

It might take a minute or two for your application to start, particularly
if it's the first time you've executed this command. Be patience and wait
for a clear message indicating that all of the required services have
started up.

As you make changes the running application will be automatically updated.
Simply refresh your browser to see them.

Sometimes one portion of your application will crash due to errors in the code.
When this occurs resolve the related issue and re-run `docker-compose up --build`
to start things back up.


## Processing PDFs with papermage

Papermage offers a unified interface for processing and analyzing PDF documents. In the example below we assume the PDF has already been processed into a papermage `Document` object. For instructions on processing a PDF, refer to the [papermage library](https://github.com/allenai/papermage). 

Here is an example of how to get information on section headers and text (for rendering the section summaries).  

```
def get_section_header_text(doc, corpusId):
    
    sections = []
    current_text = []
    current_header = None
    # the easiest way of identifying section headers is to iterate over all rows in the document,
    # checking if each row contains a section header
    for r in doc.rows:
        # rows contain a list of sections, the represent any section titles on that row
        if len(r.sections) > 0:
            # if this is a new section, add the previous section along with the running text of that section
            if current_header != None:
                sections.append({'header':current_header, 'text':' '.join(current_text)})
            # start a new header and running text
            current_header = r.sections[0]
            current_text = []
        else:
            current_text.append(r.text)

    return sections
```

For terms, we need to iterate over all text in the document, identifying if that word occurs in a dictionary of definitions 

```
def getTerms(doc, corpusId):
    # assuming we have a dictionary of terms with their definitions
    # defs_full_indexed = ....
    annotations = []
    for i, p in enumerate(doc.paragraphs):
        for j, t in enumerate(p.tokens):
            if t.text in defs_full_indexed.index:
                term = {'type':'term', 'id':'{}-{}'.format(i, j)}
                # to align the definitions to the correct positions in the paper, use .boxes from an token entity in the document
                term['attributes'] = {'term':t.text, 'boundingBoxes':[box_to_json(b) for b in t.boxes], 'paper_id':corpusId, 'definition': defs_full_indexed.loc[t.text]['definition'], 'source': '...'}
                annotations.append(term)
  return annotations
```

## Custom UI Components 

The main component running the Paper Plain demo is `Reader` (in `ui/demo/components/Reader.tsx`), which is adapted from the pdf-components library [Reader](https://github.com/allenai/pdf-component-library/blob/main/ui/demo/components/Reader.tsx). The pdf-components library describes this in more detail, but the overall set up of the reader is a `DocumentWrapper` with `PageWrapper` and `Overlay` components for each page. Any additional functionality at the page level goes within that page's  `PageWrapper`. Any functionality meant to operate over the entire document (such as Key questions or an outline) goes within the `DocumentWrapper`. The setup of the reader looks like this:

```html
<div className="reader__container">
  <YourContextProvider> // used for any context needed throughout the reader
      <DocumentWrapper
        className="reader__main"
        file={samplePdfUrl} // the pdf you are loading
        inputRef={pdfContentRef} // the parent ref for mounting components
        renderType={RENDER_TYPE.SINGLE_CANVAS}>
       
        ... // any reader-wide functionality
        <div className="reader__page-list" ref={pdfScrollableRef}>
          // iterate over each page 
          {Array.from({ length: numPages }).map((_, i) => (
            <PageWrapper key={i} pageIndex={i} renderType={RENDER_TYPE.SINGLE_CANVAS}>
              <Overlay>
                ... // any overlays (e.g., for annotations)
              </Overlay>
            </PageWrapper>
          ))}
        </div>
      </DocumentWrapper>
    </YourContextProvider>
</div>
```


### Key Questions Drawer
Paper Plain provides a curated set of key questions the reader might ask of the paper. Each question includes a brief generated plain language answer, pointers to passages in the paper where the reader can read more, and plain language summaries of the answering passages. 

The key questions are made up of two components: `KeyQuestionOutline` and  `KeyQuestionItem`.

#### KeyQuestionOutline

`KeyQuestionOutline` represents the drawer that holds the key questions. It uses the [antd drawer component](https://ant.design/components/drawer). The outline requires a showing/hiding context from the `PaperPlainHeaderContext` context header. It takes an array of `KeyQuestionOutput` provided by the API and renders them as `KeyQuestionItems`. Key questions and answers are generated by `get_all_key_questions()` in `api/docParsing.py` and returned to the UI through the `/api/fulltext` endpoint. In `Reader.tsx`:

```js
React.useEffect(() => {
    fetch('/api/fulltext?corpusId=<yourCorpusID>', {})
      .then(response => response.json())
      .then((data: FullTextOutput) => {
        setRawKeyQuestions(data['questions'].map((d: KeyQuestionOutput) => d));
      });
  }, [pageDimensions]);
```

The component takes a parentRef to mount to and a list of `KeyQuestionOutput`. In `Reader.tsx`:
```html
Reader.tsx

<div className="reader__container">
    <DocumentWrapper>
      ...
        {rawKeyQuestions && (
          <KeyQuestionOutline parentRef={pdfContentRef} questions={rawKeyQuestions} />
        )}
    <DocumentWrapper>
    ...
</div>
```
#### KeyQuestionItem

Handles clicks on individual key questions and links to sections of the paper. Each key question takes a `KeyQuestionOutput` and renders the information into the `KeyQuestionOutline`. Note that this does not render the answer sections, but links answer sections expecting them to already exist in the paper. Linking is done using `scrollToId` from the components library. In `KeyQuestionItem.tsx`:

```
import { scrollToId } from '@allenai/pdf-components';

const handleClick = React.useCallback((answer: AnswerSectionOutput) => {
    scrollToId(`answer-${answer.id}-0`);
  }, []);
```

### Annotations

Paper plain provides three types of annotations that are overlayed over the paper using the `AnnotationOverlay` component. All annotation components consist of one or more [BoundingBox](https://github.com/allenai/pdf-component-library/blob/main/ui/library/src/components/BoundingBox.tsx) from the `pdf-components` library and a [Popover](https://ant.design/components/popover) component from `antd`.

All annotations are rendered in the `AnnotationOverlay` component.


#### AnswerPopover

The `AnswerPopover` component represents that answers to the key questions in the document. These annotations are hidden by default, and only activated when the user clicks on the associated key question link to the answer. The hiding and showing is controlled by the `AnswerContext` component (in `ui/demo/context/AnswerContext.tsx`), which saves the most recently clicked `KeyQuestionItem` answer. 

In `AnnotationOverlay.tsx`:
```
import { AnswerContext } from '../context/AnswerContext';
...
export const AnnotationsOverlay: React.FunctionComponent<Props> = ({
  annotations,
  pageIndex,
  parentRef,
}: Props) => {
  function renderAnnotations(): Array<React.ReactElement> {
    // create list of popovers to populate
    const popovers: Array<React.ReactElement> = [];

    // get the currently selected answer from the AnswerContext
    const { selectedAnswer } = React.useContext(AnswerContext);
    const { selectedAnswerPopover, setSelectedAnswerPopover } = React.useContext(AnswerContext);

    const entitiesForPage = annotations.get(pageIndex);
    if (entitiesForPage) {
      const answers = entitiesForPage.answers;
      // for all answer annotations on the current page, push to the popovers list
      answers.map(answer => {
        popovers.push(
          <AnswerPopover
            key={`answer-${answer.id}`}
            answer={answer}
            parentRef={parentRef}
            isActive={selectedAnswer == `answer-${answer.id}`} // set the current active popover only, the rest are hidden
            isPopoverVisible={selectedAnswerPopover == `answer-${answer.id}`} 
            setIsPopoverVisible={(isVisible: boolean) => 
              handlePopoverVisibleChange(isVisible, `answer-${answer.id}`) // handle when the active popover is clicked off from
            }
          />
        );
      });
    }
    return popovers;
  }

  return <React.Fragment>{annotations.get(pageIndex) && renderAnnotations()}</React.Fragment>;
};
```


In `AnswerPopover.tsx`:

```

return (
<React.Fragment>
      <Popover
        ...
        visible={isPopoverVisible} // is only visible if this is the selected answer
        onVisibleChange={handleVisibleChange}>
        <React.Fragment>...BoundingBox for the answer...</React.Fragment>
      </Popover>
    </React.Fragment>
)
```



#### SectionSummaryPopover 

Annotations at the top of each subsection. These are all active by default. Generated by `get_section_header_text()` in `api/docParsing.py`. Section Summary annotations render a unique icon (rather than the standard blue dotted underlined bounding box). To render this icon, the component uses a modified bounding box component, `SectionSummaryFlag`. The main difference between `SectionSummaryFlag` and the original `BoundingBox` is that `SectionSummaryFlag` passes renders any children component, which allows `SectionSummaryPopover` to pass through an icon to be rendered. In `SectionSummaryPopover.tsx`:

```
<Popover
      getPopupContainer={() => parentRef.current}
      content={renderPopoverContent}
      trigger="click"
      onVisibleChange={handleVisibleChange}>
      <SectionSummaryFlag
        className={classNames('reader__popover__bbox', isPopoverVisible ? 'selected' : '')}
        page={summary.boundingBox.page}
        top={summary.boundingBox.top}
        left={summary.boundingBox.left}
        height={summary.boundingBox.height}
        width={summary.boundingBox.width}
        isHighlighted={true}>
        <QuestionCircleTwoTone></QuestionCircleTwoTone> // passing through a icon to be rendered in the bounding box
      </SectionSummaryFlag>
    </Popover>
```

#### TermPopover

Annotations on individual terms. Term definitions operate similarly to the section summaries, but operate over individual words or phrases. Generated by `getTerms()` in `api/terms.py`.



