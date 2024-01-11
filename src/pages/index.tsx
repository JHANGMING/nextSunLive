
import HomeSwiper from '@/common/components/homeSwiper'
import Banner from '@/modules/Home/banner'
import FarmFeature from '@/modules/Home/farmFeature'
import FriendlyFarm from '@/modules/Home/friendlyFarm'
import Image from 'next/image'
import Link from 'next/link'
import { BsHandIndex } from 'react-icons/bs'


export default function Home() {
  return (
    <main>
      <Banner />
      <FriendlyFarm />
      <FarmFeature />
      <section className=" bg-liveBG bg-no-repeat bg-bottom flex h-[528px]">
        <ul className="container grid grid-cols-12 gap-24 mb-46">
          <li className=" col-span-6">
            <Image src="/images/live/liveShow.png" alt="liveShow" width={636} height={482} className="h-[482px]" />
          </li>
          <li className=" col-span-6">
            <div className="grid grid-cols-6 gap-y-116 gap-x-24">
              <div className="col-span-5 flex flex-col gap-y-16 items-center">
                <h2 className=" text-primary-red ">正在進行的小農直播</h2>
                <h3 className=" text-primary-green ">陽光甘醇有機蕃茄</h3>
                <div className="flex gap-x-16 items-center">
                  <p className=" text-16 font-bold bg-primary-red text-white px-16 py-4 rounded-[8px] h-32">直播優惠價</p>
                  <h4 className=" text-28 text-primary-red">299</h4>
                </div>
              </div>
              <div className="col-span-6 px-27 relative flex flex-col items-center">
                <Image src="/images/live/livelimit.png" alt="livelimit" width={138} height={138} className=" absolute -top-155 right-0" />
                <p className="text-white mb-24">「品味夏日，尋找自然的美好。我們自豪地呈獻陽光甘醇有機蕃茄，每一口都是大自然的悠然滋味，新鮮、有機，為您帶來健康美味的味覺饗宴。」</p>

                <button type="button" className=" text-primary-red bg-white py-16 px-24 flex rounded-[20px] items-center gap-16 border border-dashed border-primary-red outline outline-8 outline-primary-yellow">
                  <BsHandIndex className=" rotate-90 w-24 h-24" />
                  <h4>立刻加入直播</h4>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
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
            <Image src="/images/live/liveComingLogo.png" alt="liveComingLogo" width={276} height={276} className="w-[276px] h-[276px] object-cover" />
          </div>
          <div className=" col-start-5 col-end-11">
            <ul className="flex flex-col gap-40">
              <li className="flex gap-24 ml-16">
                <Image src="/images/live/liveComingImg1.png" alt="liveComingImg1" width={240} height={200} className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px]" />
                <div className="flex flex-col gap-24">
                  <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">$ 299</p>
                  <h5 className="border-b border-black font-bold text-mediumGray">多汁天然有機鳳梨</h5>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-8 items-center">
                      <Image src="/images/live/liveComingPerson1.png" alt="liveComingPerson1" width={40} height={40} />
                      <p className=" text-primary-green mb-8">黃小翰</p>
                    </div>
                    <time className="text-primary-green">2024.02.12 (二) 14:00</time>
                  </div>
                </div>
              </li>
              <li className="flex gap-24 ml-[102px]">
                <Image src="/images/live/liveComingImg1.png" alt="liveComingImg1" width={240} height={200} className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px]" />
                <div className="flex flex-col gap-24">
                  <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">$ 299</p>
                  <h5 className="border-b border-black font-bold text-mediumGray">多汁天然有機鳳梨</h5>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-8 items-center">
                      <Image src="/images/live/liveComingPerson1.png" alt="liveComingPerson1" width={40} height={40} />
                      <p className=" text-primary-green mb-8">黃小翰</p>
                    </div>
                    <time className="text-primary-green">2024.02.12 (二) 14:00</time>
                  </div>
                </div>
              </li>
              <li className="flex gap-24 ml-[43px]">
                <Image src="/images/live/liveComingImg1.png" alt="liveComingImg1" width={240} height={200} className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px]" />
                <div className="flex flex-col gap-24">
                  <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">$ 299</p>
                  <h5 className="border-b border-black font-bold text-mediumGray">多汁天然有機鳳梨</h5>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-8 items-center">
                      <Image src="/images/live/liveComingPerson1.png" alt="liveComingPerson1" width={40} height={40} />
                      <p className=" text-primary-green mb-8">黃小翰</p>
                    </div>
                    <time className="text-primary-green">2024.02.12 (二) 14:00</time>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Link href="/live" className="flex items-center justify-end gap-8 self-start col-start-11 col-end-13">
            <p className="font-bold">直播一覽</p>
            <BsHandIndex className=" rotate-90 w-44 h-44 bg-primary-red hover:bg-primary-yellow  text-white px-10 rounded-full" />
          </Link>
        </div>
      </section>
      <section className=" bg-recommendBG h-[877px] bg-bottom bg-no-repeat bg-white pt-100">
        <div className="container flex flex-col items-center">
          <h2 className=" text-primary-red mb-16">熱賣推薦！農夫獻上最溫暖的美味</h2>
          <h4 className=" text-primary-green mb-40">讓您品味安心的每一口</h4>
          <Image src="/images/recommend/recommendPersonImg.png" alt="recommendPersonImg" width={265} height={297} className="mb-40" />
          <p className="text-center text-20 mb-40">
            <b>在這裡，你可以輕鬆選購到當季新鮮水果，</b>
            <br />
            <b>我們貼心地為您</b>
            <strong className=" text-primary-red">快速分類各種季節美味</strong>
            <br />
            讓您吃得安心，同時品味到最香甜的蔬菜和水果
          </p>
          <p className="text-center text-20">
            <b>每一個農作物都是小農用心栽種的成果，</b>
            <br />
            <b>我們期盼這份溫馨感能夠伴隨著您的每一餐， </b>
            <br />
            <strong className=" text-primary-red">讓您享受到大自然的恩惠和小農的用心</strong>
          </p>
        </div>
      </section>
      <section className="bg-white pt-24 pb-100">
        <div className="container">
          <Link href="/live" className="flex items-center justify-end gap-8 self-start col-start-11 col-end-13 mb-40">
            <p className="font-bold">商品一覽</p>
            <BsHandIndex className=" rotate-90 w-44 h-44 bg-primary-red hover:bg-primary-yellow  text-white px-10 rounded-full" />
          </Link>
          <ul className="grid grid-cols-12 gap-24">
            <li className=" col-span-4 flex flex-col gap-16">
              <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className="" />
              <div className="flex gap-16 justify-center">
                <Image src="/images/h1_logo.png" alt="productIcon" width={32} height={32} className="w-32 h-32" />
                <h3>紫禧有機天使茄</h3>
              </div>
              <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
              <div className=" flex justify-between px-24">
                <div className="flex gap-16">
                  <p className=" text-primary-red py-6 w-66 rounded-8 border border-primary-red text-center font-bold">價格</p>
                  <h4>299</h4>
                </div>
                <Link href="/cart" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8">
                  <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
                  <p className=" text-white">加入購物車</p>
                </Link>
              </div>
            </li>
            <li className=" col-span-4 flex flex-col gap-16">
              <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className="" />
              <div className="flex gap-16 justify-center">
                <Image src="/images/h1_logo.png" alt="productIcon" width={32} height={32} className="w-32 h-32" />
                <h3>紫禧有機天使茄</h3>
              </div>
              <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
              <div className=" flex justify-between px-24">
                <div className="flex gap-16">
                  <p className=" text-primary-red py-6 w-66 rounded-8 border border-primary-red text-center font-bold">價格</p>
                  <h4>299</h4>
                </div>
                <Link href="/cart" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8">
                  <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
                  <p className=" text-white">加入購物車</p>
                </Link>
              </div>
            </li>
            <li className=" col-span-4 flex flex-col gap-16">
              <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className="" />
              <div className="flex gap-16 justify-center">
                <Image src="/images/h1_logo.png" alt="productIcon" width={32} height={32} className="w-32 h-32" />
                <h3>紫禧有機天使茄</h3>
              </div>
              <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
              <div className=" flex justify-between px-24">
                <div className="flex gap-16">
                  <p className=" text-primary-red py-6 w-66 rounded-8 border border-primary-red text-center font-bold">價格</p>
                  <h4>299</h4>
                </div>
                <Link href="/cart" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8">
                  <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
                  <p className=" text-white">加入購物車</p>
                </Link>
              </div>
            </li>
            <li className=" col-span-4 flex flex-col gap-16">
              <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className="" />
              <div className="flex gap-16 justify-center">
                <Image src="/images/h1_logo.png" alt="productIcon" width={32} height={32} className="w-32 h-32" />
                <h3>紫禧有機天使茄</h3>
              </div>
              <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
              <div className=" flex justify-between px-24">
                <div className="flex gap-16">
                  <p className=" text-primary-red py-6 w-66 rounded-8 border border-primary-red text-center font-bold">價格</p>
                  <h4>299</h4>
                </div>
                <Link href="/cart" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8">
                  <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
                  <p className=" text-white">加入購物車</p>
                </Link>
              </div>
            </li>
            <li className=" col-span-4 flex flex-col gap-16">
              <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className="" />
              <div className="flex gap-16 justify-center">
                <Image src="/images/h1_logo.png" alt="productIcon" width={32} height={32} className="w-32 h-32" />
                <h3>紫禧有機天使茄</h3>
              </div>
              <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
              <div className=" flex justify-between px-24">
                <div className="flex gap-16">
                  <p className=" text-primary-red py-6 w-66 rounded-8 border border-primary-red text-center font-bold">價格</p>
                  <h4>299</h4>
                </div>
                <Link href="/cart" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8">
                  <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
                  <p className=" text-white">加入購物車</p>
                </Link>
              </div>
            </li>
            <li className=" col-span-4 flex flex-col gap-16">
              <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className="" />
              <div className="flex gap-16 justify-center">
                <Image src="/images/h1_logo.png" alt="productIcon" width={32} height={32} className="w-32 h-32" />
                <h3>紫禧有機天使茄</h3>
              </div>
              <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
              <div className=" flex justify-between px-24">
                <div className="flex gap-16">
                  <p className=" text-primary-red py-6 w-66 rounded-8 border border-primary-red text-center font-bold">價格</p>
                  <h4>299</h4>
                </div>
                <Link href="/cart" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8">
                  <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
                  <p className=" text-white">加入購物車</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <HomeSwiper imgData="farmerDatas" />
    </main>
  )
}
