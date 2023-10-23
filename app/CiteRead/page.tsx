

import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";

export const metadata = {
  title: 'CiteRead - Semantic Reader Open Research Platform',
  description: "CiteRead: Integrating Localized Citation Contexts into Scientific Paper Reading",
}

export default async function Home() {
  const paper = (await fetchPapers([247585131]))?.[0]

  return (
    <div style={{ marginTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <PersonLight person={{ name: 'Napol Rachatasumrit', image: '/images/people/napol.png' }} />
              <h1 className="h2 mb-4">CiteRead</h1>
              <p className="text-xl text-gray-600 mb-4">
                {'When reading a scholarly paper, scientists oftentimes wish to understand how follow-on work has built on or engages with what they are reading. While a paper itself can only discuss prior work, some scientific search engines can provide a list of all subsequent citing papers; unfortunately, they are undifferentiated and disconnected from the contents of the original reference paper. In this work, we introduce a novel paper reading experience that integrates relevant information about follow-on work directly into a paper, allowing readers to learn about newer papers and see how a paper is discussed by its citing papers in the context of the reference paper. We built a tool, called CiteRead, that implements the following three contributions: 1) automated techniques for selecting important citing papers, building on results from a formative study we conducted, 2) an automated process for localizing commentary provided by citing papers to a place in the reference paper, and 3) an interactive experience that allows readers to seamlessly alternate between the reference paper and information from citing papers (e.g., citation sentences), placed in the margins. Based on a user study with 12 scientists, we found that in comparison to having just a list of citing papers and their citation sentences, the use of CiteRead while reading allows for better comprehension and retention of information about follow-on work.'}
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
                    Open the following papers in CiteRead to see how it works!
                    <ul>
                      <li>- <a href='https://citextreader.s3.us-west-2.amazonaws.com/demo/index.html?file=https://citextreader.s3.us-west-2.amazonaws.com/papers/90bd099501147609165971b27b5514a2b9c2a7e7.pdf#' target='_blank'>A New Chatbot for Customer Service on Social Media. Xu et al. 2017.</a></li>
                      <li>- <a href='https://citextreader.s3.us-west-2.amazonaws.com/demo/index.html?file=https://citextreader.s3.us-west-2.amazonaws.com/papers/3c76b9192e0828c87ce8d2b8aaee197d9700dd68.pdf#' target='_blank'>Serendipity: Finger Gesture Recognition usingan Off-the-Shelf Smartwatch. Wen et al. 2016.</a></li>
                    </ul>
                    
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Conference Presentation
                  </h3>
                  <p className="text-xl text-gray-600">
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/WjltByXFKAM?si=f8T8BLJG1_yjDuMF" title="YouTube video player" style={{ boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
