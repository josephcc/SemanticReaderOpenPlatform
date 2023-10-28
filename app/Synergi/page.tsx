

import Paper from "@/components/paper";
import { fetchPapers } from "@/components/papers";
import PersonLight from "@/components/personLight";

import Image from "next/image";
import demo from '@/public/images/demos/synergi.jpg'

export const metadata = {
  title: 'Synergi and Threddy - Semantic Reader Open Research Platform',
  description: "A Mixed-Initiative System for Thread-based Scholarly Synthesis and Sensemaking",
}

export default async function Home() {
  const papers = (await fetchPapers([260899915, 251402552]))

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute left-0 right-0 m-auto w-px p-px h-10 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
              <PersonLight person={{ name: 'Hyeonsu B. Kang', image: '/images/people/hyeonsu.png' }} />
              <h1 className="h2 mb-4">Synergi</h1>
              <p className="text-xl text-gray-600 mb-4">
                <Image src={demo} alt={'Main stages of Synergi. (A) A scholar highlights a patch of text in a paper PDF that describes an interesting research problem with references. (B) The system retrieves important papers specifically relevant to the highlighted context in terms of how they have been previously cited by other scholars, via Loopy Belief Propagation over a local 2-hop citation graph from the seed references (Section~\ref{section:retrieval_algorithm}). (C) Relevant text snippets extracted from top-ranked papers are hierarchically structured and recursively summarized using GPT-4 in the chat interface. (D) The outline of threads, supporting citation contexts, and references are presented to the scholar for importing, modifying, and refactoring in the editor'} />
                {'Efficiently reviewing scholarly literature and synthesizing prior art are crucial for scientific progress. Yet, the growing scale of publications and the burden of knowledge make synthesis of research threads more challenging than ever. While significant research has been devoted to helping scholars interact with individual papers, building research threads scattered across multiple papers remains a challenge. Most top-down synthesis (and LLMs) make it difficult to personalize and iterate on the output, while bottom-up synthesis is costly in time and effort. Here, we explore a new design space of mixed-initiative workflows. In doing so we develop a novel computational pipeline, Synergi, that ties together user input of relevant seed threads with citation graphs and LLMs, to expand and structure them, respectively. Synergi allows scholars to start with an entire threads-and-subthreads structure generated from papers relevant to their interests, and to iterate and customize on it as they wish. In our evaluation, we find that Synergi helps scholars efficiently make sense of relevant threads, broaden their perspectives, and increases their curiosity. We discuss future design implications for thread-based, mixed-initiative scholarly synthesis support tools.'}
              </p>
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-12" data-aos="fade-right">


                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Demo Videos
                  </h3>
                  <p className="text-xl text-gray-600">
                  
                    <iframe width="840" height="473" src="https://www.youtube.com/embed/sCZrZqB6-hg?si=Wfq_cpz2T5r62REP" title="YouTube video player" style={{ boxShadow: 'gray 0px 0px 10px 0px', marginTop: '12px' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Conference Presentations
                  </h3>
                  <p className="text-xl text-gray-600">
                    coming soon...
                  </p>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                  <h3 className="h3 mb-3 mt-8" style={{ display: 'flex' }}>
                    Publications
                  </h3>
                  {papers.map(paper => (
                    <p className="text-xl text-gray-600 mb-8" key={paper.paperId}>
                      <Paper paper={paper} />
                    </p>
                  ))}
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
