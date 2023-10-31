import Link from 'next/link'

import { PersonType } from './person'
import PersonShuffleList from './personShuffleList'
import Institutions from './institutions'

export default function Team() {
  return (
    <section className="relative" style={{ background: '#f2f2f2' }}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Core Team</h2>
            <p className="text-l text-gray-600">See the&nbsp;
              <Link href="#publications" aria-label="Publications">
                <span style={{ textDecoration: 'underline' }}>Project Overview Paper</span>
              </Link>
              &nbsp;to see a full list of contributors.<br /><sup className='text-blue-500'>†</sup>For questions and inquiries, please contact <a href='https://joe.cat/' target="_blank">Joseph Chee Chang</a> (PaperCraft & Intelligent reading interfaces), or <a href="https://kyleclo.github.io/" target='_blank'>Kyle Lo</a> and <a href='https://soldaini.net/' target='_blank'>Luca Soldaini</a> (PaperMage & Scientific document processing).
            </p>
          </div>
        <Institutions />
        </div>


        <div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Research Advisory Board</h4>
          <div className="max-w-sm mx-auto grid md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={AdvisorPeople} />
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Intelligent Reading Interfaces Research</h4>
          <div className="max-w-sm mx-auto grid md:grid-cols-2 lg:grid-cols-5 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={InterfacePeople} />
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Scientific Document Processing Research</h4>
          <div className="max-w-sm mx-auto grid md:grid-cols-2 lg:grid-cols-5 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={Mages} />
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Research Libraries and Tooling</h4>
          <div className="max-w-sm mx-auto grid md:grid-cols-2 lg:grid-cols-5 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={PlatformPeople} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Mages: PersonType[] = [
  {
    name: 'Dongyeop Kang',
    image: '/images/people/dk.jpeg',
    affiliation: 'University of Minnesota',
    website: 'https://dykang.github.io/',
    twitter: 'https://twitter.com/dongyeopkang',
    title: 'Assistant Professor'
  },
  // {
  //   name: 'Joseph Chee Chang',
  //   image: '/images/people/joseph.jpg',
  //   affiliation: 'Allen Institute for AI, Semantic Scholar',
  //   website: 'https://joe.cat',
  //   twitter: 'https://twitter.com/josephcc',
  //   title: 'Research Scientist'
  // },
  {
    name: 'Kyle Lo',
    correspondance: true,
    image: '/images/people/kyle.jpg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://kyleclo.github.io/',
    twitter: 'https://twitter.com/kylelostat',
    title: 'Research Scientist'
  },
  {
    name: 'Luca Soldaini',
    correspondance: true,
    title: 'Research Scientist',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/luca.jpg',
    website: 'https://soldaini.net/',
    twitter: 'https://twitter.com/soldni'
  },
  {
    name: 'Shannon Shen',
    image: '/images/people/shannon.jpg',
    affiliation: 'MIT',
    title: 'Doctoral Student',
    website: 'https://www.szj.io/',
    twitter: 'https://twitter.com/shannonzshen'
  },
  {
    name: 'Doug Downey',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/doug.jpg',
    title: 'Senior Director',
    website: 'https://users.cs.northwestern.edu/~ddowney/',
    twitter: 'https://twitter.com/_DougDowney'
  },
]

const PlatformPeople: PersonType[] = [
  // {
  //   name: 'Joseph Chee Chang',
  //   image: '/images/people/joseph.jpg',
  //   affiliation: 'Allen Institute for AI, Semantic Scholar',
  //   website: 'https://joe.cat',
  //   twitter: 'https://twitter.com/josephcc',
  //   title: 'Research Scientist'
  // },
  // {
  //   name: 'Kyle Lo',
  //   image: '/images/people/kyle.jpg',
  //   affiliation: 'Allen Institute for AI, Semantic Scholar',
  //   website: 'https://kyleclo.github.io/',
  //   twitter: 'https://twitter.com/kylelostat',
  //   title: 'Research Scientist'
  // },
  // {
  //   name: 'Luca Soldaini',
  //   title: 'Research Scientist',
  //   affiliation: 'Allen Institute for AI, Semantic Scholar',
  //   image: '/images/people/luca.jpg',
  //   website: 'https://soldaini.net/',
  //   twitter: 'https://twitter.com/soldni'
  // },
  // {
  //   name: 'Shannon Shen',
  //   image: '/images/people/shannon.jpg',
  //   affiliation: 'Massachusetts Institute of Technology',
  //   title: 'Doctoral Student',
  //   website: 'https://www.szj.io/',
  //   twitter: 'https://twitter.com/shannonzshen'
  // },
  {
    name: 'Smita Rao',
    title: 'Engineering Manager',
    image: '/images/people/smita.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://www.linkedin.com/in/smita-rao-b5609448/'
  },
  {
    name: 'Tyler Murray',
    title: 'Software Engineer',
    image: '/images/people/tyler.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website:'https://www.linkedin.com/in/tcmurray/'
  },
  {
    name: 'Chloe Anastasiades',
    title: 'Software Engineer',
    image: '/images/people/chloe.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://www.linkedin.com/in/chloe-anastasiades/'
  },
  // {
  //   name: 'Tal August',
  //   affiliation: 'University of Illinois at Urbana-Champaign',
  //   title: 'Assistant Professor',
  //   image: '/images/people/tal.jpg',
  //   website: 'https://talaugust.github.io/',
  //   twitter: 'https://twitter.com/tal_august'
  // },
  {
    name: 'Caroline Paulic',
    title: 'Software Engineer',
    image: '/images/people/caroline.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
  {
    name: 'Huy Tran',
    title: 'Software Engineer',
    image: '/images/people/huy.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
  {
    name: 'YenSung Chen',
    title: 'Software Engineer',
    image: '/images/people/yensung.png',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
  {
    name: 'Paul Sayre',
    title: 'Software Engineer',
    image: '/images/people/paul.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
  {
    name: 'Eric Marsh',
    title: 'Software Engineer',
    image: '/images/people/eric.jpg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
  {
    name: 'Ngoc-Uyen Nguyen',
    title: 'Software Engineer',
    image: '/images/people/cecile.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
  {
    name: 'Sam Skjonsberg',
    title: 'Engineering Manager',
    image: '/images/people/sam.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
  },
]

const InterfacePeople: PersonType[] = [
  {
    name: 'Joseph Chang',
    correspondance: true,
    image: '/images/people/joseph.jpg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc',
    title: 'Research Scientist'
  },
  {
    name: 'Jonathan Bragg',
    title: 'Research Scientist',
    image: '/images/people/jonathan.jpg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://www.jonathanbragg.com/',
    twitter: 'https://twitter.com/turingmusician'
  },
  {
    name: 'Andrew Head',
    image: '/images/people/andrew.jpg',
    affiliation: 'University of Pennsylvania',
    title: 'Assistant Professor',
    website: 'https://andrewhead.info/',
    twitter: 'https://twitter.com/drewmikehead'
  },
  {
    name: 'Lucy Lu Wang',
    image: '/images/people/lucy.jpeg',
    affiliation: 'University of Washington',
    title: 'Assistant Professor',
    website: 'https://llwang.net/',
    twitter: 'https://twitter.com/lucyluwang'
  },
  {
    name: 'Aniket Kittur',
    image: '/images/people/niki.jpeg',
    affiliation: 'Carnegie Mellon University',
    title: 'Professor',
    website: 'https://www.kittur.org/',
    twitter: 'https://twitter.com/nkittur'
  },
  {
    name: 'Amy X. Zhang',
    image: '/images/people/amy.jpg',
    affiliation: 'University of Washington',
    title: 'Assistant Professor',
    website: 'https://homes.cs.washington.edu/~axz/',
    twitter: 'https://twitter.com/amyxzh'
  },
  {
    name: 'Tal August',
    affiliation: 'UIUC',
    title: 'Assistant Professor',
    image: '/images/people/tal.jpg',
    website: 'https://talaugust.github.io/',
    twitter: 'https://twitter.com/tal_august'
  },
  {
    name: 'Cassidy Trier',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Product Designer',
    website: 'https://www.cassidytrier.com/',
    image: '/images/people/cassidy.png',
    twitter: 'https://twitter.com/TrierCassidy'
  },
  {
    name: 'Kyle Lo',
    image: '/images/people/kyle.jpg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://kyleclo.github.io/',
    twitter: 'https://twitter.com/kylelostat',
    title: 'Research Scientist'
  },
  {
    name: 'Matt Latzke',
    image: '/images/people/matt.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://www.linkedin.com/in/mlatzke/',
    title: 'Product Designer'
  },
]

const AdvisorPeople: PersonType[] = [
  {
    name: 'Marti A. Hearst',
    image: '/images/people/marti.jpg',
    affiliation: 'University of California, Berkeley',
    title: 'Professor and Interim Dean',
    website: 'https://people.ischool.berkeley.edu/~hearst/',
  },
  {
    name: 'Daniel S. Weld',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/dan.jpg',
    title: 'Chief Scientist and General Manager',
    website: 'https://www.cs.washington.edu/people/faculty/weld',
    twitter: 'https://twitter.com/dsweld'
  },
]