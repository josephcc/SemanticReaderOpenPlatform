import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";
import Image from "next/image";
import SemanticReader from '@/public/images/semantic_reader_logo.svg'
import Tutorial from "./tutorial";


export const metadata = {
  title: 'PaperPlain - Semantic Reader Open Research Platform',
  description: "Paper Plain: Making Medical Research Papers Approachable to Healthcare Consumers with Natural Language Processing",
}

export default async function Home() {
  const paper = (await fetchPapers([247187606]))?.[0]

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <PersonLight person={{name: 'Tal August', image: '/images/people/tal.jpg'}} />
              <h1 className="h2 mb-4">Paper Plain</h1>
              <p className="text-xl text-gray-600 mb-4">
                When seeking information not covered in patient-friendly documents, healthcare consumers may turn to the research literature. Reading medical papers, however, can be a challenging experience. To improve access to medical papers, we explore four features enabled by natural language processing: definitions of unfamiliar terms, in-situ plain language section summaries, a collection of key questions that guides readers to answering passages, and plain language summaries of those passages. We embody these features into a prototype system, Paper Plain. We evaluate Paper Plain, finding that participants who used the prototype system had an easier time reading research papers without a loss in paper comprehension compared to those who used a typical PDF reader. Altogether, the study results suggest that guiding readers to relevant passages and providing plain language summaries alongside the original paper content can make reading medical papers easier and give readers more confidence to approach these papers.
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
                    Try out the Paper Plain demo on the following papers:<br />
                    <a
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://paper-plain.apps.allenai.org/reader/263912370"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="semantic reader Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Paper: Pan-cancer spatially resolved single-cell analysis reveals the crosstalk between cancer-associated fibroblasts and tumor microenvironment. 2023.</span>
                    </a>
                    <br />
                    <a
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://paper-plain.apps.allenai.org/gallery"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="semantic reader Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>See additional papers with Paper Plain enabled</span>
                    </a>
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    How to build PaperPlain with PaperMage and PaperCraft
                  </h3>
                  <Tutorial />
                  
                </div>


                {paper && (
                  <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                    <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                      Publication
                    </h3>
                    <p className="text-xl text-gray-600">
                      <Paper paper={paper} />
                    </p>
                  </div>
                )}
              </div>

              {/* Tabs items */}

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

