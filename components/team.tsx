import Image from 'next/image'
import Link from 'next/link'

import AI2 from '@/public/images/institutes/ai2.png'
import S2 from '@/public/images/institutes/s2.svg'
import UW from '@/public/images/institutes/uw.png'
import Berkeley from '@/public/images/institutes/berkeley.png'
import UPenn from '@/public/images/institutes/upenn.png'
import MIT from '@/public/images/institutes/mit.png'
import Person, { PersonType } from './person'
import { useState } from 'react'

function shuffle(array: any[]) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function Team() {
  const [platformPeople, _] = useState(shuffle(PlatformPeople))
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
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Libraries and Tooling</h4>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {platformPeople.map(person => (
              <div className="relative flex flex-col items-center p-6" key={person.name}>
                <Person {...person} />
              </div>
            ))}
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Intelligent Reading Interfaces</h4>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {shuffle(InterfacePeople).map(person => (
              <div className="relative flex flex-col items-center p-6" key={person.name}>
                <Person {...person} />
              </div>
            ))}
          </div>
          <h4 className="h4 mb-2 mt-8" style={{textAlign: 'center'}}>Advisory Board</h4>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {shuffle(AdvisorPeople).map(person => (
              <div className="relative flex flex-col items-center p-6" key={person.name}>
                <Person {...person} />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

const PlatformPeople: PersonType[] = [
  {
    name: 'Joseph C. Chang',
    image: 'https://assets-global.website-files.com/605ba9b55a4a92803e45a32b/622298160cf254a5f4a2a762_joseph-chang.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc',
    title: 'Research Scientist'
  },
  {
    name: 'Kyle Lo',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc',
    title: 'Research Scientist'
  },
  {
    name: 'Luca Soldaini',
    title: 'Research Scientist',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    image: '/images/people/luca.jpg',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Shannon Shen',
    affiliation: 'Massachusetts Institute of Technology',
    title: 'Doctoral Student',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Smita Rao',
    title: 'Engineering Manager',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Tyler Murray',
    title: 'Software Engineer',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Chloe Anastasiades',
    title: 'Software Engineer',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Tal August',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Young Investigator',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
]

const InterfacePeople: PersonType[] = [
  {
    name: 'Joseph C. Chang',
    image: 'https://assets-global.website-files.com/605ba9b55a4a92803e45a32b/622298160cf254a5f4a2a762_joseph-chang.jpeg',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc',
    title: 'Research Scientist'
  },
  {
    name: 'Jonathan Bragg',
    title: 'Research Scientist',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Andrew Head',
    affiliation: 'UPenn',
    title: 'Assistant Professor',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Amy X. Zhang',
    affiliation: 'University of Washington',
    title: 'Assistant Professor',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Tal August',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Young Investigator',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Cassidy Trier',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Product Designer',
    website: 'https://www.cassidytrier.com/',
    twitter: 'https://twitter.com/josephcc'
  },
]

const AdvisorPeople: PersonType[] = [
  {
    name: 'Doug Downey',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Senior Director',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
  {
    name: 'Marti A. Hearst',
    affiliation: 'University of California, Berkeley',
    title: 'Professor',
    website: 'https://people.ischool.berkeley.edu/~hearst/',
  },
  {
    name: 'Dan Weld',
    affiliation: 'Allen Institute for AI, Semantic Scholar',
    title: 'Chief Scientist',
    website: 'https://joe.cat',
    twitter: 'https://twitter.com/josephcc'
  },
]