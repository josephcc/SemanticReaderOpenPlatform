'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import PaperMage from '@/public/images/PaperMage.jpg'
import ComponentLibray from '@/public/images/semantic_reader_logo.svg'
import Github from '@/public/images/github.svg'
import ArXiv from '@/public/images/arxiv.svg'


export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-3 md:pb-5">
            <h1 className="h2 mb-4">Open Source Libraries</h1>
            <p className="text-xl text-gray-600">Process PDF Documents   ➡️  Build Interactive Reading Interfaces</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3" style={{display: 'flex'}}>
                  <Image src={PaperMage} alt="PaperMage Logo"  style={{height: '40px !important', width: 'auto', marginRight: '8px'}}/>
                  PaperMage
                </h3>
                <p className="text-xl text-gray-600">
                An open-source Python toolkit for processing and analyzing the contents of visually-rich, structured scientific documents. PaperMage offers abstractions for seamlessly representing both textual and visual paper elements, integrates several disparate state-of-the-art models into a unified framework, and provides turn-key recipes for standard scientific NLP use-cases. PaperMage has powered multiple research prototypes along with a large-scale production system, processing millions of PDFs. 
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <a
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="https://github.com/allenai/papermage"
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <Image src={Github} alt="Github Logo" style={{ height: '32px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{marginLeft: '16px'}}>Check Out the Source Code</div>
                </a>
                <a
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="https://github.com/allenai/papermage"
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <Image src={ArXiv} alt="arXiv Logo" style={{ height: '22px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{marginLeft: '16px'}}>Read the Paper</div>
                </a>
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={ComponentLibray} alt="ComponentLibrary Logo"  style={{height: '32px', width: 'auto', marginRight: '8px'}}/>
                  ComponentLibrary
                </h3>
                <p className="text-xl text-gray-600">
                An open-source TypeScript library for rendering, visually augmenting and adding interactivity for scientific documents. The ComponentLibrary provides reusable React components and abstractions, combined with PaperMage, the ComponentLibrary enables researchers to develop novel intelligent and interactive reading interfaces. It is used in several research prototypes listed below, and is the same library that is used in our production Semantic Reader application used by ~50k real-world users every month.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <a
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="https://github.com/allenai/pdf-component-library"
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <Image src={Github} alt="Github Logo" style={{ height: '32px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{marginLeft: '16px'}}>Check Out the Source Code</div>
                </a>
              </div>
            </div>

            {/* Tabs items */}

          </div>

        </div>
      </div>
    </section>
  )
}