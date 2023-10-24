import path from "path";
import fs from 'fs';

// import dynamic from "next/dynamic";
import Markdown, { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";

import Image from 'next/image'
import Github from '@/public/images/github.svg'
import SemanticReader from '@/public/images/semantic_reader_logo.svg'

const markdownHDowngrade: Partial<Components> = {
  h1(props) { return (<h3 {...props} />) },
  h2(props) { return (<h4 {...props} />) },
  h3(props) { return (<h5 {...props} />) },
  h4(props) { return (<h6 {...props} />) },
  h5(props) { return (<h6 {...props} />) },
  table(props) {
    return (
      <table {...props} style={{ fontSize: '0.8em' }} />

    )
  },
  code(props) {
    return (
      <code {...props} style={{ fontSize: '0.8em', whiteSpace: 'pre-wrap', padding: '0 4px' }} />

    )
  },
  pre(props) {
    return (
      <pre {...props} style={{ background: '#28264b', lineHeight: 1.25, padding: '8px' }} />
    )
  }
}


export const metadata = {
  title: 'PaperCraft - Semantic Reader Open Research Platform',
  description: "PaperCraft- Semantic Reader Open Research Platform",
}

export default async function Home() {
  const tutorialFp = path.join('app', 'PaperCraft', 'tutorial.md')
  // read from file and remove first heading
  const tutorialMd = (await fs.promises.readFile(tutorialFp, 'utf8')).trim().replace(/#[\w\W]+?\n+?/, "")

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <h1 className="h2 mb-4">PaperCraft</h1>
              <p className="text-xl text-gray-600 mb-4">
              Create an interactive reading experience for PDF's in your react application!
              PaperCraft is used and maintained by the Semantic Scholar team to create Semantic Reader. It is built on top of React-PDF, with additional features for visual augmentations, interactivities, and performance improvements.
              </p>
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-12" data-aos="fade-right">

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Useful Links
                  </h3>
                  <p className="text-xl text-gray-600">
                    <a
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://github.com/allenai/pdf-component-library" style={{ marginRight: '8px', flexGrow: 1 }}
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={Github} alt="Github Logo" style={{ height: '32px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ marginLeft: '16px' }}>Source Code</span>
                    </a>
                    <a
                      style={{ flexShrink: 1 }}
                      className='inline-flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                      href="https://www.semanticscholar.org/product/semantic-reader"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="arXiv Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Try Semantic Reader</span>
                    </a>
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Tutorial
                  </h3>
                  <article className="prose lg:prose-xl">
                    <Markdown remarkPlugins={[remarkGfm]} components={markdownHDowngrade}>{tutorialMd}</Markdown>
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
