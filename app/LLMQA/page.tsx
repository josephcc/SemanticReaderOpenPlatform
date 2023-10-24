

import PersonLight from "@/components/personLight";

import Image from "next/image";
import demo from '@/public/images/demos/QA.png'

export const metadata = {
  title: 'Explore Paper with QA - Semantic Reader Open Research Platform',
  description: 'Explore Paper with QA - Semantic Reader Open Research Platform',
}

export default async function Home() {

  return (
    <div style={{ marginTop: '100px' }}>
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
                    Explore the following papers with LLM:
                  </p>
                  <ul>
                    <li>- <a href='https://s2-labs-paper-qa.allen.ai/reader/257766269/41/121?tid=OpenPlatform&userId=OpenPlatform' target='_blank'>The Semantic Reader Project: Augmenting Scholarly Documents through AI-Powered Interactive Reading Interfaces. Lo et al. 2023.</a></li>
                    <li>- <a href='https://s2-labs-paper-qa.apps.allenai.org/reader/256868353/1/0?tid=OpenPlatform&userId=OpenPlatform' target='_blank'>CiteSee: Augmenting Citations in Scientific Papers with Persistent and Personalized Historical Context. Chang et al. 2023.</a></li>
                  </ul>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    How to build Paper Q&A using PaperMage and PaperCraft
                  </h3>
                  <p className="text-xl text-gray-600">
                    Coming soon..
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
