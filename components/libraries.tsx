'use client'

import { useState, useRef, useEffect, CSSProperties } from 'react'
import Image from 'next/image'
import PaperMage from '@/public/images/PaperMage.jpg'
import ComponentLibray from '@/public/images/semantic_reader_logo.svg'
import Github from '@/public/images/github.svg'
import ArXiv from '@/public/images/arxiv.svg'
import Demo from '@/public/images/Demo.gif'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Link from 'next/link'

export const codeStyle: CSSProperties = {
  fontSize:'0.86em',
  borderRadius: '4px',
  border: '1px solid #eee',
}

const paperMageCode = `from papermage.recipes import CoreRecipe

recipe = CoreRecipe()
doc = recipe.run("paper.pdf")
paragraphs_text = [p.text for p in doc.paragraphs]

term_defs = []

for sentence in doc.abstracts[0].sentences:
    print(sentence.text)
    # When reading a scholarly article, inline...
    # However, it can be challenging to pri...
    # ...

    print(sentence.words[:2])
    # ['When', 'reading']
    # ['However', 'it']
    # ...

    # bounding boxes of 4th words + definitions
    term = sentence.words[3]
    term_def = prompt(
      ' '.join(paragraphs_text)} + 
      f'What is the definition of "{term.text}"?'
    )
    term_defs.append((term.boxes, term_def))

send_to_paper_craft_ui(term_defs)️`

const paperScrollCode1 = `import {
  DocumentContext, DocumentWrapper, Overlay, PageWrapper
} from '@allenai/pdf-components'

const Reader: React.FC = ({termDefinitions}) => {
  const {numPages} = useContext(DocumentContext)
  const pageIndices = [...Array(numPages).keys()]
  /* PageWrapper: render each page */
  /* Overlay: visual augmentations and interactions */
  return (
    <DocumentWrapper file={pdfUrl}>
      {pageIndices.map(pageIndex => (
        <PageWrapper pageIndex={pageIndex}>
          <Overlay>
            {/* abstract is on page 1 */}
            {pageIndex === 0 && ( 
              {termDefinitions.map(termDefinition => (
                <BlueTextPopover
                  termDefinition={termDefinition}
                />
              )}
            )}
          </Overlay>
        </PageWrapper>
      )}
    </DocumentWrapper>
  )
}
`
const paperScrollCode2 = `import { Popover } from 'antd'
import { BoundingBox } from '@allenai/pdf-components'

const BlueTextPopover: React.FC = (props) => {
  const { termDefinition } = props
  const [box, definition] = termDefinition
  {/* show definition on click with an antd widget */}
  {/* highlight the BoundingBox of the term */}
  return (
    <Popover
      content={definition}
      trigger="click"
    >
      <BoundingBox
        className="screen-blend-blue"
        isHighlighted={true}
        page={box.page}
        top={box.top}
        left={box.left}
        height={box.height}
        width={box.width}
      />
    </Popover>
  )
}
/* .screen-blend-blue {
      background: blue;
      mix-blend-mode: screen;} */`

export default function Libraries() {
  
  const [tab, setTab] = useState<0|1>(0)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
            <h1 className="h2 mb-4">Open Source Libraries</h1>
            <p className="text-xl text-gray-600 mb-4">
              We provide PaperMage + PaperCraft for building intelligent and interactive paper readers. Below we showcase how to extract text from a PDF to prompt a LLM for term definitions and then visually augment the paper with highlights and popups.
            </p>
            <div className="flex items-center justify-center">
              <Image src={Demo} alt="Demo Screenshot" height="350"  style={{border: '1px solid #ccc', boxShadow: '0 0 10px 0px #eeeeee'}}/>
            </div>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                <h3 className="h3 mb-3" style={{display: 'flex'}}>
                  <Image src={PaperMage} alt="PaperMage Logo" style={{ height: '40px !important', width: 'auto', marginRight: '8px' }} height='40' />
                  PaperMage
                </h3>
                {/* <p className="text-xl text-gray-600">
                An open-source Python toolkit for processing and analyzing the contents of visually-rich, structured scientific documents. PaperMage offers abstractions for seamlessly representing both textual and visual paper elements, integrates several disparate state-of-the-art models into a unified framework, and provides turn-key recipes for standard scientific NLP use-cases. PaperMage has powered multiple research prototypes along with a large-scale production system, processing millions of PDFs. 
                </p> */}
                <p className="text-xl text-gray-600">
                Process and Analyze Scholarly PDF Documents
                </p>
                  <SyntaxHighlighter style={shadesOfPurple} language={'python'} customStyle={codeStyle}>
                    {paperMageCode}
                </SyntaxHighlighter>
              </div>
              {/* Tabs buttons */}
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8" style={{display: 'flex'}}>
                <a
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="https://github.com/allenai/papermage" style={{marginRight: '8px', flexGrow: 1 }}
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0">
                    <Image src={Github} alt="Github Logo" style={{ height: '32px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{marginLeft: '16px'}}>Source Code</div>
                </a>
                  <a
                    className='relative inline-block flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                    href="https://github.com/allenai/papermage/blob/3781ae08a787f1b2e755a9eff69ec029a6749a8c/tests/fixtures/papermage.pdf"
                    style={{ flexGrow: 1 }}
                    target='_blank' rel='noreferrer'
                  >
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0">
                      <Image src={ArXiv} alt="arXiv Logo" style={{ height: '22px !important', width: 'auto' }} />
                    </div>
                    <div className="font-bold tracking-tight" style={{ marginLeft: '16px' }}>Read the Preprint</div>
                    <span style={{ fontSize: '0.65' }} className="absolute -top-2 -left-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-500/10 mr-1">NEW: EMNLP 2023</span>
                  </a>
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                <h3 className="h3 mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={ComponentLibray} alt="ComponentLibrary Logo"  style={{height: '32px', width: 'auto', marginRight: '8px'}}/>
                  PaperCraft
                </h3>
                <p className="text-xl text-gray-600">
                  Create Visually Augmented Interactive Readers 
                </p>
                {/* <p className="text-xl text-gray-600">
                An open-source TypeScript library for rendering, visually augmenting and adding interactivity for scientific documents. The ComponentLibrary provides reusable React components and abstractions, combined with PaperMage, the ComponentLibrary enables researchers to develop novel intelligent and interactive reading interfaces. It is used in several research prototypes listed below, and is the same library that is used in our production Semantic Reader application used by ~50k real-world users every month.
                </p> */}

                <div style={{textAlign: 'right', marginBottom: '-25.5px'}}>
                  <span style={{fontSize: '0.5em', opacity: tab === 0 ? 1 : 0.6}} className={"cursor-pointer inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset mr-1 bg-blue-50 text-blue-700 ring-blue-700/10"} onClick={() => setTab(0)}>Reader.tsx</span>
                  <span style={{fontSize: '0.5em', opacity: tab === 1 ? 1 : 0.6}} className={"cursor-pointer inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset mr-1 bg-blue-50 text-blue-700 ring-blue-700/10"} onClick={() => setTab(1)}>Popover.tsx</span>
                </div>
                <SyntaxHighlighter style={shadesOfPurple} language={'typescript'} customStyle={{ ...codeStyle, display: tab === 0 ? 'block' : 'none'}} useInlineStyles>
                  {paperScrollCode1}
                </SyntaxHighlighter>
                <SyntaxHighlighter style={shadesOfPurple} language={'typescript'} customStyle={{ ...codeStyle, display: tab === 1 ? 'block' : 'none'}} useInlineStyles>
                  {paperScrollCode2}
                </SyntaxHighlighter>
              </div>
              {/* Tabs buttons */}
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8" style={{display: 'flex'}}>
                <a
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600' style={{marginRight: '8px', flexGrow: 1 }}
                  href="https://github.com/allenai/pdf-component-library"
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0">
                    <Image src={Github} alt="Github Logo" style={{ height: '32px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{marginLeft: '16px'}}>Source Code</div>
                </a>
                <Link
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="/PaperCraft"
                  style={{ flexGrow: 1 }}
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0" style={{ fontSize: '28px' }}>
                    📄
                  </div>
                  <div className="font-bold tracking-tight" style={{marginLeft: '16px'}}>Read the Tutorial</div>
                </Link>
              </div>
            </div>

            {/* Tabs items */}

          </div>

        </div>
      </div>
    </section>
  )
}