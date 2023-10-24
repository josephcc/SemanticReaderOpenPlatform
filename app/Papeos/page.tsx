
import SemanticReader from '@/public/images/semantic_reader_logo.svg'

import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";
import Image from "next/image";
import image2 from '@/public/images/demos/papeos/image2.gif'
import image3 from '@/public/images/demos/papeos/image3.gif'
import image4 from '@/public/images/demos/papeos/image4.gif'
import image5 from '@/public/images/demos/papeos/image5.png'
import image6 from '@/public/images/demos/papeos/image6.png'
import image7 from '@/public/images/demos/papeos/image7.gif'
import image8 from '@/public/images/demos/papeos/image8.gif'
import image9 from '@/public/images/demos/papeos/image9.gif'
import image10 from '@/public/images/demos/papeos/image10.gif'
import image11 from '@/public/images/demos/papeos/image11.gif'

export const metadata = {
  title: 'Papeos - Semantic Reader Open Research Platform',
  description: "Papeos: Augmenting Research Papers with Talk Videos.",
}

export default async function Home() {
  const paper = (await fetchPapers([261276997]))?.[0]

  return (
    <div style={{ marginTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <PersonLight person={{ name: 'Taesoo Kim', image: '/images/people/taesoo.jpg' }} />
              <h1 className="h2 mb-4">Papeos</h1>
              <p className="text-xl text-gray-600 mb-4">
                {'Research consumption has been traditionally limited to the reading of academic papers-a static, dense, and formally written format. Alternatively, pre-recorded conference presentation videos, which are more dynamic, concise, and colloquial, have recently become more widely available but potentially under-utilized. In this work, we explore the design space and benefits for combining academic papers and talk videos to leverage their complementary nature to provide a rich and fluid research consumption experience. Based on formative and co-design studies, we present Papeos, a novel reading and authoring interface that allow authors to augment their papers by segmenting and localizing talk videos alongside relevant paper passages with automatically generated suggestions. With Papeos, readers can visually skim a paper through clip thumbnails, and fluidly switch between consuming dense text in the paper or visual summaries in the video. In a comparative lab study (n=16), Papeos reduced mental load, scaffolded navigation, and facilitated more comprehensive reading of papers.'}
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
                      href="https://papeo.app/demo"
                      target='_blank' rel='noreferrer'
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Image src={SemanticReader} alt="semantic reader Logo" style={{ height: '22px !important', width: 'auto' }} />
                      </span>
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Play with Papeos on the Papeos Paper</span>
                    </a>
                  </p>
                </div>


                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Conference Presentation
                  </h3>
                  <p className="text-xl text-gray-600">
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/YyqYkL9VeWM?si=y-8YfaqVbZlsnzq6" title="YouTube video player" style={{ boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Interface Walkthrough
                  </h3>
                  <article className="prose lg:prose-xl">
                    <p>
                      This tutorial explains how to use the Papeo Reader interface and its various features! This interface lets you read <b>Papeos</b>: Schoarly <b>Pap</b>ers with clips from their talk vid<b>eos</b> on the margins.

                      <Image src={image5} alt='screenshot of papeo' />

                      Video clips are attached to parts of the paper with corresponding content. These parts of the paper are indicated by a colored sidebars.
                    </p>
                    <h4>(1) Sidebars</h4>
                    <p>
                      To watch the video clips, you can click on the sidebar. This will focus the video clip (i.e., enlarge it and show the full transcript) and will start playing the video clip.
                      <Image src={image4} alt='screenshot of papeo' />
                      Clicking on the sidebar will also pull the video clip closer to the sidebar. You can click on the sidebar multiple times to bring it even closer.

                      <Image src={image3} alt='screenshot of papeo' />
                      Instead of watching a clip or to get a quick glimpse of what is shown in the clip, you can also hover over the sidebar and move up/down to quickly scrub through the clip.
                      <Image src={image7} alt='screenshot of papeo' />
                      </p>

                      <h4>(2) Video Clips</h4>
                      <p>
                      To watch clips, you can also click on the clips themselves.

                      To increase the speed of the video, you can hover over the video and then click on the controls on the top right to set the playback speed (e.g., 1x, 1.25x, 1.5x, 1.75x, or 2.00x). This setting will apply to all video clips.

                      <Image src={image10} alt='screenshot of papeo' />

                      After watching a clip, you will be asked if you want to replay the clip or go to next video clip.
                      </p>
                      <ul>
                        <li>Clicking on replay will replay the clip. </li>
                        <li>Clicking on next will change to the next clip in the order of the video. The video clip will stay in place and the paper will scroll to the location of that clip</li>
                      </ul>
                      <p>
                      <Image src={image9} alt='screenshot of papeo' />

                      If you want the interface to automatically go to the next clip, you can also switch the autoplay on. For this, hover over a clip and click on the toggle on the top-left. With autoplay, you can watch the whole video while seeing where the information is located in the paper.

                      <Image src={image8} alt='screenshot of papeo' />

                      On top of the video clip, you can also see the video's timeline.
                      </p>
                      <ul>
                        <li>Each block represents a clip. Their width represents the clip's duration.</li>
                        <li>Lighter blocks are clips you have watched. Colored block is the current clip. </li>
                        <li>Hovering over a block will show the title of the paper section where that clip is found.</li>
                      </ul>
                      <p>
                      <Image src={image6} height='400' alt='screenshot of papeo' />

                      You can also click on the blocks in the timeline to navigate to those clips.
                      <Image src={image2} height='400' alt='screenshot of papeo' />

                      Paper author(s) can decide to not map certain clips to their paper. Unmapped clips will not be shown in the margin, but can be accessed with the timeline and are presented with a gray border.
                      </p>

                      <h4>(3) Highlights</h4>
                      <p>

                      At the bottom of the clips you can see the video transcript with lines colored in as the video plays.

                      For some of the clips, you will also see highlights in the transcript shown as bolded words. These highlighted words or phrases are connected to similar or relevant words or phrases in the paper.

                      Hover over the highlights in the transcript (or the paper) and the corresponding words or phrases in the paper (or transcript) will be highlighted in sync.

                      <Image src={image11} alt='screenshot of papeo' />

                      This can help you more easily find keywords or information mentioned in the video in the paper.

                    </p>
                  </article>
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
