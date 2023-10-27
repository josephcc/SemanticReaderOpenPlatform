import Image from 'next/image'

import AI2 from '@/public/images/institutes/ai2.png'
import UW from '@/public/images/institutes/uw.png'
import Berkeley from '@/public/images/institutes/berkeley.png'
import UPenn from '@/public/images/institutes/upenn.png'
import MIT from '@/public/images/institutes/mit.png'
import UIUC from '@/public/images/institutes/uiuc.png'
import Minnesota from '@/public/images/institutes/minnesota.png'

export default function Institutions() {
  const itemClassName = 'flex-shrink-1 mt-10'
  return (
    <div className="flex flex-wrap justify-between">
      {/* Item */}
      <div className={itemClassName}>
        <Image src={AI2} alt="AI2 Logo" height="40" />
      </div>
      {/* Item
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <Image src={S2} alt="S2 Logo" height="40" />
            </div> */}

      {/* Item */}
      <div className={itemClassName}>
        <Image src={UW} alt="UW Logo" height="40" />
      </div>

      {/* Item */}
      <div className={itemClassName}>
        <Image src={Berkeley} alt="UCB Logo" height="40" />
      </div>

      {/* Item */}
      <div className={itemClassName}>
        <Image src={UPenn} alt="UPenn Logo" height="40" />
      </div>

      {/* Item */}
      <div className={itemClassName}>
        <Image src={MIT} alt="MIT Logo" height="40" />
      </div>

      <div className={itemClassName}>
        <Image src={UIUC} alt="UIUC Logo" height="40" />
      </div>

      <div className={itemClassName}>
        <Image src={Minnesota} alt="Minnesota Logo" height="40" />
      </div>

    </div>
  )
}
