import Image from 'next/image'
import Link from 'next/link'

import AI2 from '@/public/images/institutes/ai2.png'
import S2 from '@/public/images/institutes/s2.svg'
import UW from '@/public/images/institutes/uw.png'
import Berkeley from '@/public/images/institutes/berkeley.png'
import UPenn from '@/public/images/institutes/upenn.png'

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
                <span style={{textDecoration: 'underline'}}>project overview paper</span>
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

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <Image src={S2} alt="S2 Logo" height="40" />
            </div>

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

          </div>



      </div>
    </section>
  )
}