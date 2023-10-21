import path from "path";
import fs from 'fs';

// import dynamic from "next/dynamic";
import Markdown, { Components } from 'react-markdown'
import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";

const markdownHDowngrade: Partial<Components> = {
  h1(props) { return (<h3 {...props} />)},
  h2(props) { return (<h4 {...props} />)},
  h3(props) { return (<h5 {...props} />)},
  h4(props) { return (<h6 {...props} />)},
  h5(props) { return (<h6 {...props} />)},
  code(props) { return (
    <code {...props} style={{fontSize: '0.8em', whiteSpace: 'pre-wrap', padding: '0 4px' }} />

  )},
  pre(props) { return (
    <pre {...props} style={{ background: '#28264b', lineHeight: 1.25, padding: '8px' }} />
  )}
}


export const metadata = {
  title: 'PaperPlain - Semantic Reader Open Research Platform',
  description: "PaperPlain - Semantic Reader Open Research Platform",
}

export default async function Home() {
  const tutorialFp = path.join('app', 'PaperPlain', 'tutorial.md')
  // read from file and remove first heading
  const tutorialMd = (await fs.promises.readFile(tutorialFp, 'utf8')).trim().replace(/#[\w\W]+?\n+?/,"")
  const paper = (await fetchPapers([247187606]))?.[0]

  return (
    <div style={{ marginTop: '100px' }}>
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
                    <a href='https://paper-plain.apps.allenai.org/reader/707201' target='_blank'>Play with the Demo</a>
                  </p>
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

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    How to build PaperPlain with PaperMage and PaperCraft
                  </h3>
                  <article className="prose lg:prose-xl">
                    Source code will be available soon.

                    <Markdown components={markdownHDowngrade}>{tutorialMd}</Markdown>
                  </article>
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
