import Image from 'next/image'
import Link from 'next/link'

import AI2 from '@/public/images/institutes/ai2.png'
import S2 from '@/public/images/institutes/s2.svg'
import UW from '@/public/images/institutes/uw.png'
import Berkeley from '@/public/images/institutes/berkeley.png'
import UPenn from '@/public/images/institutes/upenn.png'
import MIT from '@/public/images/institutes/mit.png'
import Person, { PersonType } from './person'
import PersonShuffleList from './personShuffleList'

export default function Team() {
  return (
    <section className="relative" style={{ background: '#f2f2f2' }}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Core Team</h2>
            <p className="text-xl text-gray-600">See the&nbsp;
              <Link href="#publications" aria-label="Publications">
                <span style={{ textDecoration: 'underline' }}>Project Overview Paper</span>
              </Link>
              &nbsp;below to see a full list of contributors.</p>
          </div>
        </div>

        {/* Items */}
        <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5 pb-8">

          {/* Item */}
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Image src={AI2} alt="AI2 Logo" height="40" />
          </div>

          {/* Item
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <Image src={S2} alt="S2 Logo" height="40" />
            </div> */}

          {/* Item */}
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <Image src={UW} alt="UW Logo" height="40" />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
            <Image src={Berkeley} alt="UCB Logo" height="40" />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
            <Image src={UPenn} alt="UPenn Logo" height="40" />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4 opacity-70">
            <Image src={MIT} alt="MITLogo" height="34" />
          </div>

        </div>

        <div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Research Libraries and Tooling</h4>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={PlatformPeople} />
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Intelligent Reading Interfaces Research</h4>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={InterfacePeople} />
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Research Advisory Board</h4>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <PersonShuffleList people={AdvisorPeople} />
          </div>
        </div>
      </div>
    </section>
  )
}

const PlatformPeople: PersonType[] = [
  {
    name: 'Joseph Chee Chang',
    image: '/images/people/joseph.jpg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc',
    title: 'Research Scientist'
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
    name: 'Luca Soldaini',
    title: 'Research Scientist',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/luca.jpg',
    website: 'https://soldaini.net/',
    twitter: 'https://twitter.com/soldni'
  },
  {
    name: 'Shannon Shen',
    image: '/images/people/shannon.jpg',
    affiliation: 'Massachusetts Institute of Technology',
    title: 'Doctoral Student',
    website: 'https://www.szj.io/',
    twitter: 'https://twitter.com/shannonzshen'
  },
  {
    name: 'Smita Rao',
    title: 'Engineering Manager',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://www.linkedin.com/in/smita-rao-b5609448/'
  },
  {
    name: 'Tyler Murray',
    title: 'Software Engineer',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website:'https://www.linkedin.com/in/tcmurray/'
  },
  {
    name: 'Chloe Anastasiades',
    title: 'Software Engineer',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://www.linkedin.com/in/chloe-anastasiades/'
  },
  {
    name: 'Tal August',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Young Investigator',
    image: '/images/people/tal.jpg',
    website: 'https://talaugust.github.io/',
    twitter: 'https://twitter.com/tal_august'
  },
]

const InterfacePeople: PersonType[] = [
  {
    name: 'Joseph Chee Chang',
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
    affiliation: 'UPenn',
    title: 'Assistant Professor',
    website: 'https://andrewhead.info/',
    twitter: 'https://twitter.com/drewmikehead'
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
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Young Investigator',
    image: '/images/people/tal.jpg',
    website: 'https://talaugust.github.io/',
    twitter: 'https://twitter.com/tal_august'
  },
  {
    name: 'Cassidy Trier',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Product Designer',
    website: 'https://www.cassidytrier.com/',
    twitter: 'https://twitter.com/TrierCassidy'
  },
]

const AdvisorPeople: PersonType[] = [
  {
    name: 'Doug Downey',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/doug.jpg',
    title: 'Senior Director',
    website: 'https://users.cs.northwestern.edu/~ddowney/',
    twitter: 'https://twitter.com/_DougDowney'
  },
  {
    name: 'Marti A. Hearst',
    image: '/images/people/marti.jpg',
    affiliation: 'University of California, Berkeley',
    title: 'Professor and Interim Dean',
    website: 'https://people.ischool.berkeley.edu/~hearst/',
  },
  {
    name: 'Dan Weld',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/dan.jpg',
    title: 'Chief Scientist',
    website: 'https://www.cs.washington.edu/people/faculty/weld',
    twitter: 'https://twitter.com/dsweld'
  },
]