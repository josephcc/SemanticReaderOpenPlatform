import path from "path";
import fs from 'fs';

// import dynamic from "next/dynamic";
import Markdown, { Components } from 'react-markdown'
import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";

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
  const tutorialMd = (await fs.promises.readFile(tutorialFp, 'utf8')).trim().replace(/#[\w\W]+?\n+?/,"")
  const paper = (await fetchPapers([247187606]))?.[0]

  return (
    <div style={{ marginTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-15">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <h1 className="h2 mb-4">PaperPlain</h1>
              <p className="text-xl text-gray-600 mb-4">
                We provide PaperMage + PaperCraft for building intelligent and interactive paper readers. Below we showcase how to extract text from a PDF to prompt a LLM for term definitions and then visually augment the paper with highlights and popups.
              </p>
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-12" data-aos="fade-right">

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3" style={{ display: 'flex' }}>
                    Demo
                  </h3>
                  <p className="text-xl text-gray-600">
                    Link to demo and show a gif?
                  </p>
                </div>

                {paper && (
                  <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                    <h3 className="h3 mb-3" style={{ display: 'flex' }}>
                      Publication
                    </h3>
                    <p className="text-xl text-gray-600">
                      <Paper paper={paper} />
                    </p>
                  </div>
                )}

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3" style={{ display: 'flex' }}>
                    Tutorial
                  </h3>
                  <article className="prose lg:prose-xl">
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
