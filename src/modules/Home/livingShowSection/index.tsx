import Image from 'next/image'
import Link from 'next/link'
import { BsHandIndex } from 'react-icons/bs'
import LivingProduct from './LivingProduct'
import { globalIconSet } from '@/constants/globaIIcon'
const LivingShowSection = () => {
  return (
    <section className=" bg-liveBG bg-no-repeat bg-bottom flex h-[528px]">
      <ul className="container grid grid-cols-12 gap-24 mb-46">
        <li className=" col-span-6 relative">
          <Image src="/images/home/live/liveShow.png" alt="liveShow" width={636} height={482} className="h-[482px]" />
          <Image {...globalIconSet.logoImage} width={50} height={50} className=" absolute left-1/2 -top-30 transform -translate-x-1/2" />
        </li>
        <li className=" col-span-6">
          <div className="grid grid-cols-6 gap-y-116 gap-x-24">
            <LivingProduct />
            <div className="col-span-6 px-27 relative flex flex-col items-center">
              <Image src="/images/home/live/limitTimeSale.png" alt="limitTimeSale" width={138} height={138} className=" absolute -top-155 right-0" />
              <p className="text-white mb-24">「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」</p>
              <Link href="/live" className=" text-primary-red bg-white py-16 px-24 flex rounded-[20px] items-center gap-16 border border-dashed border-primary-red hover:outline hover:outline-8 hover:outline-primary-yellow group">
                <BsHandIndex className=" rotate-90 w-24 h-24 transition-transform group-hover:translate-x-4" />
                <h4>立刻加入直播</h4>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default LivingShowSection
