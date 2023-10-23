'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

import SemanticReader from '@/public/images/semantic_reader.svg'

export default function Header() {

  const [top, setTop] = useState<boolean>(false)

  // // detect whether user has scrolled the page down by 10px
  // const scrollHandler = () => {
  //   window.pageYOffset > 10 ? setTop(false) : setTop(true)
  // }  

  // useEffect(() => {
  //   scrollHandler()
  //   window.addEventListener('scroll', scrollHandler)
  //   return () => window.removeEventListener('scroll', scrollHandler)
  // }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Home">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={SemanticReader} alt="Hero image" height="32" />
                <span style={{fontWeight: 'bold', color: 'gray', fontSize: '0.78em', marginLeft: '8px', position: 'relative', top: '1px'}}>Open Research Platform</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow text-l" style={{ justifyContent: 'right' }}>
            {/* Desktop sign in links - align right*/}
            <Link href="/#libraries" className="block" aria-label="Home">
                <span style={{color: 'gray', fontSize: '0.78em', marginLeft: '16px', position: 'relative'}}>Libraries</span>
            </Link>

            <Link href="/#demos" className="block" aria-label="Demos">
                <span style={{color: 'gray', fontSize: '0.78em', marginLeft: '16px', position: 'relative'}}>Demos</span>
            </Link>

            <Link href="/#publications" className="block" aria-label="Publications">
                <span style={{color: 'gray', fontSize: '0.78em', marginLeft: '16px', position: 'relative'}}>Publications</span>
            </Link>


            <Link href="/#team" className="block" aria-label="Team">
                <span style={{color: 'gray', fontSize: '0.78em', marginLeft: '16px', position: 'relative'}}>Team</span>
            </Link>
          </nav>


          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
