import Image from 'next/image'

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
              <p className="text-xl text-gray-600 mb-8 tracking-wide" data-aos="zoom-y-out" data-aos-delay="150" style={{ fontSize: '1.2em' }}>
              <span style={{fontWeight: 'bold'}}>Semantic Reader Project</span> is a broad collaborative effort across multiple non-profit, industry, and academic institutions to create interactive, intelligent reading interfaces for research papers. The <a href="https://arxiv.org/abs/2303.14334" target="_blank" rel="noopener" style={{textDecoration: 'underline'}}>Semantic Reader research papers</a> summarizes our efforts in combining AI and HCI research to design novel, AI-powered interactive reading interfaces that address a variety of user challenges faced by today's scholars. We are also developing <a href="https://www.semanticscholar.org/product/semantic-reader" target="_blank" rel="noopener" style={{textDecoration: 'underline'}}>Semantic Reader</a> as a freely available product that integrates features from research prototypes as they mature. Finally, this website presents our core <span style={{fontWeight: 'bold'}}>Open Research Platform</span> that enabled both our intelligent reading interfaces research and the product, consisting of the <span style={{fontWeight: 'bold'}}>PaperMage</span> library for processing PDFs, and the <span style={{fontWeight: 'bold'}}>PDF Component Library</span> for building interactive reading interfaces. We hope that these resources will help accelerate research and product development in this area.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}