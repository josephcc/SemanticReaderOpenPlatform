import Image from 'next/image'
import HeroBackground from '@/public/images/hero-background.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none -z-1 " style={{ width: '1360px', top: '6rem' }} aria-hidden="true">
        <Image src={HeroBackground} alt="Hero image" width="1360" height="578" data-aos="zoom-y-out" data-aos-delay="300"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Publications</h2>
          </div>



          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <h4 className="h4 mb-2">Project Overview</h4>
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-2">
                <p className="text-s text-gray-600">
                  <span style={{ fontWeight: 'bold' }}>The Semantic Reader Project: Augmenting Scholarly Documents through AI-Powered Interactive Reading Interfaces</span>. arXiv abs/2303.14334 2023. Kyle Lo, Joseph Chee Chang, Andrew Head, Jonathan Bragg, Amy X. Zhang, Cassidy Trier, Chloe Anastasiades, Tal August, Russell Authur, Danielle Bragg, Erin Bransom, Isabel Cachola, Stefan Candra, Yoganand Chandrasekhar, Yen-Sung Chen, Evie (Yu-Yen) Cheng, Yvonne Chou, Doug Downey, Rob Evans, Raymond Fok, F.Q. Hu, Regan Huff, Dongyeop Kang, Tae Soo Kim, Rodney Michael Kinney, Aniket Kittur, Hyeonsu B Kang, Egor Klevak, Bailey Kuehl, Michael Langan, Matt Latzke, Jaron Lochner, Kelsey MacMillan, Eric Marsh, Tyler Murray, Aakanksha Naik, Ngoc-Uyen Nguyen, Srishti Palani, Soya Park, Caroline Paulic, Napol Rachatasumrit, Smita R Rao, Paul L Sayre, Zejiang Shen, Pao Siangliulue, Luca Soldaini, Huy Tran, Madeleine van Zuylen, Lucy Lu Wang, Christopher Wilhelm, Caroline M Wu, Jiangjiang Yang, Angele Zamarron, Marti A. Hearst and Daniel S. Weld. 
                </p>
              </li>
            </ul>
            <h4 className="h4 mb-2 mt-8">Interactive and Intelligent Reading Interfaces</h4>
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-2">
                <p className="text-s text-gray-600">
                  <span style={{fontWeight: 'bold'}}>CiteSee: Augmenting Citations in Scientific Papers with Persistent and Personalized Historical Context</span>. Proceedings of the CHI Conference on Human Factors in Computing Systems (<span style={{textDecoration: 'underline'}}>Best Paper Award</span>). 2023. Joseph Chee Chang, Amy X. Zhang, Jonathan Bragg, Andrew Head, Kyle Lo, Doug Downey and Daniel S. Weld.
                </p>
              </li>
              <li className="flex justify-between gap-x-6 py-2">
                <p className="text-s text-gray-600">
                  <span style={{fontWeight: 'bold'}}>CiteRead: Integrating Localized Citation Contexts into Scientific Paper Reading</span>. The International Conference on Intelligent User Interfaces. 2022. Rachatasumrit, Napol, Jonathan Bragg, Amy X. Zhang and Daniel S. Weld.
                </p>
              </li>
            </ul>
            <h4 className="h4 mb-2 mt-8">Open Research Resources: Libraries, Models, Datasets.</h4>
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-2">
                <p className="text-s text-gray-600">
                  <span style={{fontWeight: 'bold'}}>PaperMage: A Unified Toolkit for Processing, Representing, and Manipulating Visually-Rich Scientific Documents</span>. In Submission. 2023. Kyle Lo, Zejiang Shen, Benjamin Newman, Joseph Chee Chang, Russell Authur, Erin Bransom, Stefan Candra, Yoganand Chandrasekhar, Regan Huff, Bailey Kuehl, Amanpreet Singh, Chris Wilhelm, Angele Zamarron, Marti A. Hearst, Daniel S. Weld, Doug Downey, Luca Soldaini.
                </p>
              </li>
              <li className="flex justify-between gap-x-6 py-2">
                <p className="text-s text-gray-600">
                  <span style={{fontWeight: 'bold'}}>The Semantic Scholar Open Data Platform</span>. arXiv abs/2301.10140 2023. Kinney, Rodney Michael, Chloe Anastasiades, Russell Authur, Iz Beltagy, Jonathan Bragg, Alexandra Buraczynski, Isabel Cachola, Stefan Candra, Yoganand Chandrasekhar, Arman Cohan, Miles Crawford, Doug Downey, Jason Dunkelberger, Oren Etzioni, Rob Evans, Sergey Feldman, Joseph Gorney, David W. Graham, F.Q. Hu, Regan Huff, Daniel King, Sebastian Kohlmeier, Bailey Kuehl, Michael Langan, Daniel Lin, Haokun Liu, Kyle Lo, Jaron Lochner, Kelsey MacMillan, Tyler Murray, Christopher Newell, Smita R Rao, Shaurya Rohatgi, Paul L Sayre, Zejiang Shen, Amanpreet Singh, Luca Soldaini, Shivashankar Subramanian, A. Tanaka, Alex D Wade, Linda M. Wagner, Lucy Lu Wang, Christopher Wilhelm, Caroline Wu, Jiangjiang Yang, Angele Zamarron, Madeleine van Zuylen and Daniel S. Weld.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}