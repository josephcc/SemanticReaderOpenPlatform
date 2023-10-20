import Image from 'next/image'
import ArXiv from '@/public/images/arxiv.svg'
import SemanticReader from '@/public/images/semantic_reader_logo.svg'

import HeroBackground from '@/public/images/hero-background.jpg'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none -z-1 " style={{ width: '1360px', bottom: '6rem' }} aria-hidden="true">
        <Image src={HeroBackground} alt="Hero image" width="1360" height="578" data-aos="zoom-y-out" data-aos-delay="300"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-6" data-aos="zoom-y-out">The Semantic Reader <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Open Research Platform</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-4 tracking-wide" data-aos="zoom-y-out" data-aos-delay="150" style={{ fontSize: '1.2em' }}>
              <span style={{fontWeight: 'bold'}}>Semantic Reader Project</span> is a collaborative effort of NLP + HCI researchers from non-profit, industry, and academic institutions to create interactive, intelligent reading interfaces for scholarly papers.
              Our research led to the creation of Semantic Reader, an application used by tens of thousands of scholars each week.
              
              </p>
              <p className="text-xl text-gray-600 mb-8 tracking-wide" data-aos="zoom-y-out" data-aos-delay="150" style={{ fontSize: '1.2em' }}>
              The <span style={{fontWeight: 'bold'}}>Semantic Reader Open Research Platform</span> provides resources that enable the broader research community to explore exciting challenges around novel research support tools: <span style={{fontWeight: 'bold'}}>PaperMage</span>, a library for processing and analyzing scholarly PDFs, and <span style={{fontWeight: 'bold'}}>PaperCraft</span>, a React UI component for building augmented and interactive reading interfaces. 
              Join us in designing the future of scholarly reading interfaces with our open source libraries!

              {/* We hope by providing these resources we can enable and encourage the broader research community to work on exciting novel intelligent reading interfaces for research papers with us. */}

              {/* We hope that these resources will help accelerate research and product development in this area. */}
              </p>
              {/* The <a href="https://arxiv.org/abs/2303.14334" target="_blank" rel="noopener" style={{textDecoration: 'underline'}}>Semantic Reader research papers</a> summarizes our efforts in combining AI and HCI research to design novel, AI-powered interactive reading interfaces that address a variety of user challenges faced by today's scholars. */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a
                  style={{ flexShrink: 1, marginRight: '16px' }}
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="https://arxiv.org/abs/2303.14334"
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <Image src={ArXiv} alt="arXiv Logo" style={{ height: '22px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{margin: '0 16px'}}>Read the Overview Paper</div>
                </a>
                <a
                  style={{ flexShrink: 1 }}
                  className='flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg text-gray-600'
                  href="https://www.semanticscholar.org/product/semantic-reader"
                  target='_blank' rel='noreferrer'
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <Image src={SemanticReader} alt="arXiv Logo" style={{ height: '22px !important', width: 'auto' }} />
                  </div>
                  <div className="font-bold tracking-tight" style={{margin: '0 16px'}}>Try Semantic Reader</div>
                </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}