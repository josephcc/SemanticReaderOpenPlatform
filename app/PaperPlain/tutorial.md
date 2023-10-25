# Paper Plain Demo

This is a short doc explaining the features of the PaperPlain demo. It includes examples of how the demo UI is implemented with [PaperCraft](https://github.com/allenai/pdf-component-library)) and how the demo processes PDFs with the [PaperMage library](https://github.com/allenai/papermage). Both libraries are publicly avaliable. 

The majority of this readme will be describing PDF processing and custom react UI components built using these two libraries. 

## Processing PDFs with papermage

PaperMage offers a unified interface for processing and analyzing PDF documents. In the example below we assume the PDF has already been processed into a papermage `Document` object. For instructions on processing a PDF, refer to the [PaperMage library](https://github.com/allenai/papermage). 

Here is an example of how to get information on section headers and text (for rendering summaries of sections).  

```python
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

Here is an example of identifying terms in a paper to define them. For terms we need to iterate over all text in the document, identifying if that word occurs in a dictionary of definitions 

```python
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

## Custom UI Components with PaperCraft

PaperCraft provides multiple components to get started building a pdf reader. The main component running the PaperPlain demo is `Reader`, which is adapted from the PaperCraft [Reader](https://github.com/allenai/pdf-component-library/blob/main/ui/demo/components/Reader.tsx). The pdf-components library describes this in more detail, but the overall set up of the reader is a `DocumentWrapper` with `PageWrapper` and `Overlay` components for each page. Any additional functionality at the page level goes within that page's  `PageWrapper`. Any functionality meant to operate over the entire document (such as PaperPlain's key questions or an outline) goes within the `DocumentWrapper`. The setup of the reader looks like this:

```tsx
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

Below we cover how to build some of the components for PaperPlain

### Key Questions Drawer
PaperPlain provides a curated set of key questions the reader might ask of the paper. Each question includes a brief generated plain language answer, pointers to passages in the paper where the reader can read more, and plain language summaries of the answering passages. 

The key questions are made up of two components: `KeyQuestionOutline` and  `KeyQuestionItem`.

#### KeyQuestionOutline

`KeyQuestionOutline` represents the drawer that holds the key questions. It uses the [antd drawer component](https://ant.design/components/drawer). It takes an array of `KeyQuestionOutput` provided by the API and renders them as `KeyQuestionItems`. In `Reader.tsx`:

```tsx
React.useEffect(() => {
    fetch('/api/fulltext?corpusId=<yourCorpusID>', {})
      .then(response => response.json())
      .then((data: FullTextOutput) => {
        setRawKeyQuestions(data['questions'].map((d: KeyQuestionOutput) => d));
      });
  }, [pageDimensions]);
```

The component takes a parentRef to mount to and a list of `KeyQuestionOutput`. In `Reader.tsx`:
```tsx
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

For each key question, a `KeyQuestionItem` handles clicks on individual key questions and links to sections of the paper. Each key question takes a `KeyQuestionOutput` and renders the information into the `KeyQuestionOutline`. Note that this does not render the answer sections, but links answer sections expecting them to already exist in the paper. Linking is done using `scrollToId` from the PaperCraft library. In `KeyQuestionItem.tsx`:

```typescript
import { scrollToId } from '@allenai/pdf-components';

const handleClick = React.useCallback((answer: AnswerSectionOutput) => {
    scrollToId(`answer-${answer.id}-0`);
  }, []);
```

### Annotations

PaperPlain provides three types of annotations that are overlayed on the paper using the `AnnotationOverlay` component. All annotation components consist of one or more [BoundingBoxes](https://github.com/allenai/pdf-component-library/blob/main/ui/library/src/components/BoundingBox.tsx) from the PaperCraft library and a [Popover](https://ant.design/components/popover) component from `antd`.

All annotations are rendered in the `AnnotationOverlay` component.


#### AnswerPopover

The `AnswerPopover` component represents that answers to the key questions in the document. These annotations are hidden by default, and only activated when the user clicks on the associated key question link to the answer. The hiding and showing is controlled by the `AnswerContext` component (in `ui/demo/context/AnswerContext.tsx`), which saves the most recently clicked `KeyQuestionItem` answer. 

In `AnnotationOverlay.tsx`:
```typescript
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

```typescript
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



#### SectionSummaryPopover and TermPopover

Section summaries and term definitions both work as annotations over the document and are active by default. An example of rendering a term definition in the paper (provided by the `getTerms()`) would look like this:

```typescript
return (
    // Create a BoundingBox/Popover pair for each definition.
    <Popover
      // Passing this ref mounts the popover "inside" the scrollable content area
      // instead of using the entire browser height.
      getPopupContainer={() => parentRef.current}
      content={renderPopoverContent} // will render the definition from getTerms()
      trigger="click"
      onVisibleChange={handleVisibleChange}>
      <BoundingBox
        className={classNames('reader__popover__bbox', isPopoverVisible ? 'selected' : '')}
        page={term.boundingBox.page}
        top={term.boundingBox.top}
        left={term.boundingBox.left}
        height={term.boundingBox.height}
        width={term.boundingBox.width}
        isHighlighted={true}></BoundingBox>
    </Popover>
  );
```

