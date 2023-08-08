export const metadata = {
  title: 'Semantic Reader Open Research Platform',
  description: "Semantic Reader Project is a broad collaborative effort across multiple non-profit, industry, and academic institutions to create interactive, intelligent reading interfaces for research papers. The Semantic Reader research papers summarizes our efforts in combining AI and HCI research to design novel, AI-powered interactive reading interfaces that address a variety of user challenges faced by today's scholars. We are also developing Semantic Reader as a freely available product that integrates features from research prototypes as they mature. Finally, this website presents our core Open Research Platform that enabled both our intelligent reading interfaces research and the product, consisting of the PaperMage library for processing PDFs, and the PDF Component Library for building interactive reading interfaces. We hope that these resources will help accelerate research and product development in this area.",
}

import Hero from '@/components/hero'
import Libraries from '@/components/libraries'
import Demos from '@/components/demos'
import Papers from '@/components/papers'
import Team from '@/components/team'

export default function Home() {
  return (
    <>
      <Hero />
      <div id='libraries' style={{position: 'relative', top: '-60px'}}/>
      <Libraries />
      <div id='demos' style={{position: 'relative', top: '-60px'}}/>
      <Demos />
      <div id='team' style={{position: 'relative', top: '-60px'}}/>
      <Team />
      <div id='publications' style={{position: 'relative', top: '-60px'}}/>
      <Papers />
    </>
  )
}
