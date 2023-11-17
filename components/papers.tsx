import Image from 'next/image'
import HeroBackground from '@/public/images/hero-background.jpg'
import Paper from './paper'

export interface AuthorType {
      authorId: string
      name: string
}
export interface PaperType {
  paperId: string
  publicationVenue: {
    id: string
    name: string
    type: string
    alternate_names: string[]
    url: string
  },
  title: string
  venue: string
  year: number
  authors: AuthorType[]
  externalIds: {CorpusId: number}
  citationCount: number
  journal: {
    name: string
  }
}

const overviewId = [257766269]
const systemIds = [263835343, 261276997, 260899915, 256868353, 247585131, 248420091, 254591867, 252004841, 222066998, 247187606, 251402552,256846632,239011922]
const resourceIds = [258865865, 256416131, 259064127, 256194545, 222291111, 245704273]
//const resourceIds = [256416131, 259064127, 256194545, 215416146, 216867622, 215768677, 222291111, 245704273]

export async function fetchPapers(ids: number[]) {
  const key = process.env.S2_PARTNER_KEY || ''
  const response = await fetch('https://partner.semanticscholar.org/graph/v1/paper/batch?fields=title,authors,venue,publicationVenue,year,externalIds,citationCount,journal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
    },
    body: JSON.stringify({ ids: ids.map(id => `CorpusId:${id}`) })
  })
  const papers = await response.json() as PaperType[]
  papers.sort((a, b) => b.year - a.year)
  return papers
}

export default async function Papers() {
  const overviews = await fetchPapers(overviewId);
  const systems = await fetchPapers(systemIds);
  const resources = await fetchPapers(resourceIds);
  const authors = new Set();
  overviews.forEach(paper => paper.authors.forEach(author => authors.add(author.authorId)))
  systems.forEach(paper => paper.authors.forEach(author => authors.add(author.authorId)))
  resources.forEach(paper => paper.authors.forEach(author => authors.add(author.authorId)))
  console.log('AUTHORS', authors.size)
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none -z-1 " style={{ width: '1360px', top: '6rem' }} aria-hidden="true">
        <Image src={HeroBackground} alt="Hero image" width="1360" height="578" data-aos="zoom-y-out" data-aos-delay="300"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Publications</h2>
          </div>


          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <h4 className="h4 mb-2">Semantic Reader Project Overview</h4>
            <ul role="list" className="divide-y divide-gray-100">
              {overviews && overviews.map((paper, idx) => {
                return (
                  <li key={idx} className="flex justify-between gap-x-6 py-2">
                    <p className="text-s text-gray-600">
                      <Paper paper={paper} />
                    </p>
                  </li>
                )
              })}
            </ul>
            <h4 className="h4 mb-2 mt-8">Interactive and Intelligent Reading Interfaces</h4>
            <ul role="list" className="divide-y divide-gray-100">
              {systems && systems.map((paper, idx) => {
                return (
                  <li key={idx} className="flex justify-between gap-x-6 py-2">
                    <p className="text-s text-gray-600">
                      <Paper paper={paper} />
                    </p>
                  </li>
                )
              })}
            </ul>

            <h4 className="h4 mb-2 mt-8">Open Research Resources: Libraries, Models, Datasets</h4>
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-2">
                <p className="text-s text-gray-600">
                  <span style={{ display: 'inline-block' }}>
                      <a href={'https://github.com/allenai/papermage/blob/3781ae08a787f1b2e755a9eff69ec029a6749a8c/tests/fixtures/papermage.pdf'} target="_blank" style={{ fontWeight: 600 }}>
                    PaperMage: A Unified Toolkit for Processing, Representing, and Manipulating Visually-Rich Scientific Documents</a><br/>Kyle Lo, Zejiang Shen, Benjamin Newman, Joseph Chee Chang, Russell Authur, Erin Bransom, Stefan Candra, Yoganand Chandrasekhar, Regan Huff, Bailey Kuehl, Amanpreet Singh, Chris Wilhelm, Angele Zamarron, Marti A. Hearst, Daniel S. Weld, Doug Downey, Luca Soldaini. Conference on Empirical Methods in Natural Language Processing: Demos. 2023.
                  </span>
                </p>
              </li>
              {resources && resources.map((paper, idx) => {
                return (
                  <li key={idx} className="flex justify-between gap-x-6 py-2">
                    <p className="text-s text-gray-600">
                      <Paper paper={paper} />
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
