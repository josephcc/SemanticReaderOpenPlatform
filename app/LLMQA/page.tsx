
import SemanticReader from '@/public/images/semantic_reader_logo.svg'
import PersonLight from "@/components/personLight";

import Image from "next/image";
import demo from '@/public/images/demos/QA.png'
import Tutorial from './tutorial';
import Link from 'next/link';

export const metadata = {
  title: 'Explore Paper with QA - Semantic Reader Open Research Platform',
  description: 'Explore Paper with QA - Semantic Reader Open Research Platform',
}

export default async function Home() {

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PersonLight person={{ name: 'Joseph Chee Chang', image: '/images/people/joseph.jpg' }} style={{ marginRight: '12px' }} />
                <PersonLight person={{ name: 'Luca Soldaini', image: '/images/people/luca.jpg' }} />
              </div>
              <h1 className="h2 mb-4">Explore Paper with QA</h1>
              <p className="text-xl text-gray-600 mb-4">
                <Image src={demo} alt={'Screenshot of LLMQA system - on the left, the sidebar shows the user input question. Below, there is a generated answer and a list of three supporting statements extracted from the paper. The third statement is highlighted indicating that its active, on the left, in the papers pdf, the corresponding supporting evidences is also highlighted.'} style={{ boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }} />
              </p>
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-12" data-aos="fade-right">

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Interactive Demo
                  </h3>
                  <p className="text-xl text-gray-600">
                    <a
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://s2-labs-paper-qa.allen.ai/reader/257766269/41/121?tid=OpenPlatform&userId=OpenPlatform"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="semantic reader Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Paper A: The Semantic Reader Project Paper</span>
                    </a>
                    <br/>
                    <a
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://s2-labs-paper-qa.apps.allenai.org/reader/256868353/1/0?tid=OpenPlatform&userId=OpenPlatform"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="semantic reader Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Paper B: The CiteSee Paper</span>
                    </a>
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    How to build a Paper Q&A backend using PaperMage
                  </h3>
                  <p className="text-xl text-gray-600 mb-4">
                    Here, we demostrate how to implement an attributed QA application using PaperMage. The below example is a custom PaperMage Predictor, that prompts an LLM with the full text of a paper plus an question about the paper from a user. In the prompt, the Predictor instructs the LLM to generate concise answer based on the content of the papper, along with a list of quotes from the paper as supporting evidence. Please follow the below code snippets and comments to see how everything works.

                  </p>
                  <Tutorial />
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    How to build a Paper Q&A frontend with PaperCraft 
                  </h3>
                  <p className="text-xl text-gray-600 mb-12">
                    The frontend of this demo included a sidebar that contaned the answer and a list of supporting evidence, and a rendered PDF in the main view. Two interactions are supported: when the user clicked on a supporting evidence, the PDF will 1) <em>scroll to</em> the area where the evidence is located and 2) highlight the corresponding text in blue. These interactions were also part of PaperPlain prototype, so please refer to the <Link href='/PaperPlain'>PaperPlain tutorial</Link> to see how to implement them in the frontend with PaperCraft.
                  </p>
                </div>


              </div>

              {/* Tabs items */}

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
