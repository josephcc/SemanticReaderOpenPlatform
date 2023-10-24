

import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";
import Image from "next/image";
import Screenshot from '@/public/images/demos/citesee.jpg'
import SemanticReader from '@/public/images/semantic_reader_logo.svg'
import Link from "next/link";

export const metadata = {
  title: 'CiteSee - Semantic Reader Open Research Platform',
  description: "CiteSee: Augmenting Citations in Scientific Papers with Persistent and Personalized Historical Context.",
}

export default async function Home() {
  const paper = (await fetchPapers([256868353]))?.[0]

  return (
    <div style={{ marginTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <PersonLight person={{name: 'Joseph Chee Chang', image: '/images/people/joseph.jpg'}} />
              <h1 className="h2 mb-4">CiteSee</h1>
              <p className="text-xl text-gray-600 mb-4">
              {'When reading a scholarly article, inline citations help researchers contextualize the current article and discover relevant prior work. However, it can be challenging to prioritize and make sense of the hundreds of citations encountered during literature reviews. This paper introduces CiteSee, a paper reading tool that leverages a user’s publishing, reading, and saving activities to provide personalized visual augmentations and context around citations. First, CiteSee connects the current paper to familiar contexts by surfacing known citations a user had cited or opened. Second, CiteSee helps users prioritize their exploration by highlighting relevant but unknown citations based on saving and reading history. We conducted a lab study that suggests CiteSee is significantly more effective for paper discovery than three baselines. A field deployment study shows CiteSee helps participants keep track of their explorations and leads to better situational awareness and increased paper discovery via inline citation when conducting real-world literature reviews.'}
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
                      <span className="font-bold tracking-tight" style={{ margin: '0 16px' }}>Play with a subset of CiteSee features on the CiteSee paper</span>
                    </a>


                    <Image src={Screenshot} style={{ width: '840px', height: 'auto', boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }}alt='screenshot of scim'  />


                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Conference Presentation
                  </h3>
                  <p className="text-xl text-gray-600">
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/rDzdz9KsNiE?si=y-8YfaqVbZlsnzq6" title="YouTube video player" style={{ boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                    <Link href='https://blog.allenai.org/citesee-e0f9e9d46569' target="_blank" style={{fontWeight: 600}}>CiteSee: Augmenting Citations in Papers with Persistent and Personalized Historical Context
</Link>. AI2 Blog. 2023. Joseph Chee Chang.
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
