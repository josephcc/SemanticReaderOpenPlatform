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
      <Libraries />
      <Demos />
      <Team />
      <Papers />
    </>
  )
}
