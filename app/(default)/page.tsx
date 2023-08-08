export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
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
