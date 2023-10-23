import Image from 'next/image'

import AI2 from '@/public/images/institutes/ai2.png'
import UW from '@/public/images/institutes/uw.png'
import Berkeley from '@/public/images/institutes/berkeley.png'
import UPenn from '@/public/images/institutes/upenn.png'
import MIT from '@/public/images/institutes/mit.png'
import UIUC from '@/public/images/institutes/uiuc.png'

export default function Institutions() {
  return (
    <div className="max-w-sm mx-auto grid gap-1 md:grid-cols-2 lg:grid-cols-6 items-start md:max-w-2xl lg:max-w-none">
      {/* Item */}
      <div className="flex items-center justify-center py-2">
        <Image src={AI2} alt="AI2 Logo" height="40" />
      </div>
      {/* Item
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <Image src={S2} alt="S2 Logo" height="40" />
            </div> */}

      {/* Item */}
      <div className="flex items-center justify-center py-2">
        <Image src={UW} alt="UW Logo" height="40" />
      </div>

      {/* Item */}
      <div className="flex items-center justify-center py-2">
        <Image src={Berkeley} alt="UCB Logo" height="40" />
      </div>

      {/* Item */}
      <div className="flex items-center justify-center py-2">
        <Image src={UPenn} alt="UPenn Logo" height="40" />
      </div>

      {/* Item */}
      <div className="flex items-center justify-center py-2">
        <Image src={MIT} alt="MIT Logo" height="34" />
      </div>

      <div className="flex items-center justify-center py-2">
        <Image src={UIUC} alt="UIUC Logo" height="34" />
      </div>

    </div>
  )
}
