import LinkToProduct from '@/common/components/LinkToProduct'
import Image from 'next/image'
import Link from 'next/link'
import { BsHandIndex } from 'react-icons/bs'
const ComingProductsSection = () => {
  return (
    <section className="container pt-80 pb-120">
      <div className="grid grid-cols-12 gap-24">
        <div className=" col-start-2 col-end-4">
          <div className=" writing-mode-vertical-lr mb-36">
            <h2 className=" text-primary-red mr-24">即 將 到 來</h2>
            <p className="text-32 leading-[60px]">
              特 別 為 您 準 備<br />最 優 惠 的 直 播 驚 喜
            </p>
            <p></p>
          </div>
          <Image src="/images/home/live/liveComingLogo.png" alt="liveComingLogo" width={276} height={276} className="w-[276px] h-[276px] object-cover" />
        </div>
        <div className=" col-start-5 col-end-11">
          <ul className="flex flex-col gap-40">
            <li className="flex gap-24 ml-16">
              <div className=" relative group">
                <Image src="/images/home/live/liveComingImg1.png" alt="liveComingImg1" width={240} height={200} className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px]" />
                <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white  text-primary-red opacity-0 group-hover:opacity-80 transition-opacity duration-500 w-[137px] h-48 rounded-18">Coming Soon</p>
              </div>
              <div className="flex flex-col gap-24">
                <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">$ 299</p>
                <h5 className="border-b border-black font-bold text-mediumGray">多汁天然有機鳳梨</h5>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-8 items-center">
                    <Image src="/images/home/live/liveComingPerson1.png" alt="liveComingPerson1" width={40} height={40} />
                    <p className=" text-primary-green">黃小翰</p>
                  </div>
                  <time className="text-primary-green">2024.02.12 (二) 14:00</time>
                </div>
              </div>
            </li>
            <li className="flex gap-24 ml-[102px]">
              <Image src="/images/home/live/liveComingImg1.png" alt="liveComingImg1" width={240} height={200} className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px]" />
              <div className="flex flex-col gap-24">
                <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">$ 299</p>
                <h5 className="border-b border-black font-bold text-mediumGray">多汁天然有機鳳梨</h5>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-8 items-center">
                    <Image src="/images/home/live/liveComingPerson2.png" alt="liveComingPerson1" width={40} height={40} />

                    <p className=" text-primary-green">黃小翰</p>
                  </div>
                  <time className="text-primary-green">2024.02.12 (二) 14:00</time>
                </div>
              </div>
            </li>
            <li className="flex gap-24 ml-[43px]">
              <Image src="/images/home/live/liveComingImg1.png" alt="liveComingImg1" width={240} height={200} className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px]" />
              <div className="flex flex-col gap-24">
                <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">$ 299</p>
                <h5 className="border-b border-black font-bold text-mediumGray">多汁天然有機鳳梨</h5>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-8 items-center">
                    <Image src="/images/home/live/liveComingPerson3.png" alt="liveComingPerson1" width={40} height={40} />
                    <p className=" text-primary-green">黃小翰</p>
                  </div>
                  <time className="text-primary-green">2024.02.12 (二) 14:00</time>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <LinkToProduct path="/live" />
      </div>
    </section>
  )
}

export default ComingProductsSection
