

import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";
import Image from "next/image";
import SemanticReader from '@/public/images/semantic_reader_logo.svg'
import Screenshot from '@/public/images/demos/scim.jpg'
import Link from "next/link";

export const metadata = {
  title: 'SCIM - Semantic Reader Open Research Platform',
  description: "Scim: Intelligent Skimming Support for Scientific Papers.",
}

export default async function Home() {
  const paper = (await fetchPapers([254591867]))?.[0]

  return (
    <div style={{ marginTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <PersonLight person={{name: 'Raymond Fok', image: '/images/people/ray.jpg'}} />
              <h1 className="h2 mb-4">Scim</h1>
              <p className="text-xl text-gray-600 mb-4">
              {'Scholars need to keep up with an exponentially increasing flood of scientific papers. To aid this challenge, we introduce Scim, a novel intelligent interface that helps experienced researchers skim – or rapidly review – a paper to attain a cursory understanding of its contents. Scim supports the skimming process by highlighting salient paper contents in order to direct a reader’s attention. The system’s highlights are faceted by content type, evenly distributed across a paper, and have a density configurable by readers at both the global and local level. We evaluate Scim with both an in-lab usability study and a longitudinal diary study, revealing how its highlights facilitate the more efficient construction of a conceptualization of a paper. We conclude by discussing design considerations and tensions for the design of future intelligent skimming tools.'}
              </p>
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-12" data-aos="fade-right">

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Demo
                  </h3>
                  <p className="text-xl text-gray-600">


                    <a
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://www.semanticscholar.org/reader/903b3afd316837ffdf46f0cea7ee242d897d7956"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="semantic reader Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Play with Scim on the Scim paper</span>
                    </a>
                    <Image src={Screenshot} style={{ width: '840px', height: 'auto', boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }}alt='screenshot of scim'  />

                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Publication
                  </h3>
                  {paper && (
                    <p className="text-xl text-gray-600">
                      <Paper paper={paper} />
                    </p>
                  )}
                  <p className='mt-8 mb-8 text-xl text-gray-600'>
                    <Link href='https://blog.allenai.org/case-study-iterative-design-for-skimming-support-5563dbe0899e' target="_blank" style={{fontWeight: 600}}>Case Study: Iterative Design for Skimming Support</Link>. AI2 Blog. 2023. Cassidy Trier.
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

// export async function getMarkdown(fullPath: string) {
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Use remark to convert markdown into HTML string
//     const processedContent = await remark()
//       .use(html)
//       .process(matterResult.content);
//     const contentHtml = processedContent.toString();

//     return contentHtml
// }
