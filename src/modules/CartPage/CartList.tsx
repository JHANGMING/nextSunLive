import LogoImg from '@/common/components/Logo/LogoImg';
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronRight, BsChevronDown, BsX } from 'react-icons/bs';
const CartList = () => {
  return (
    <>
      <ul className=" col-span-12 flex items-center gap-12 mb-[54px]">
        <li className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-full bg-primary-yellow flex justify-center items-center border border-black">
            1
          </div>
          <h5>購物車</h5>
        </li>
        <li>
          <BsChevronRight size={24} className=" text-darkGray" />
        </li>
        <li className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-full bg-primary-yellow flex justify-center items-center border border-black">
            2
          </div>
          <h5>填寫資料與付款</h5>
        </li>
        <li>
          <BsChevronRight size={24} className=" text-darkGray" />
        </li>
        <li className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-full bg-primary-yellow flex justify-center items-center border border-black">
            3
          </div>
          <h5>訂購完成</h5>
        </li>
      </ul>
      <div className="bg-white col-span-9 p-24 rounded-20 mb-16">
        <div className="flex gap-8">
          <BsChevronDown size={24} className=" text-primary-green" />
          <p className=" text-darkGray font-semibold text-20">購物車清單</p>
        </div>
        <ul className="cartlist">
          <li className="p-24 flex justify-between">
            <div className="flex gap-16">
              <Image
                src="/images/home/live/liveComingImg1.png"
                alt="liveComingImg1"
                width={80}
                height={80}
                className="w-80 h-80"
              />
              <div className="">
                <h6 className=" font-normal">夢幻柳橙夏悠</h6>
                <div className="text-14 flex gap-8">
                  <p>
                    NT$<span>250</span>
                  </p>
                  <p className=" text-lightGray line-through">299</p>
                </div>
              </div>
            </div>
            <div className="text-18">小份 (213g)</div>
            <div>
              <div className="flex gap-x-12 items-center">
                <Image
                  src="/images/cart/dec.png"
                  alt="dec"
                  width={20}
                  height={20}
                  className="w-20 h-20 cursor-pointer hover:opacity-70"
                />
                <p className="text-18">1</p>
                <Image
                  src="/images/cart/plus.png"
                  alt="plus"
                  width={20}
                  height={20}
                  className="w-20 h-20 cursor-pointer hover:opacity-70"
                />
              </div>
            </div>
            <div className=" flex gap-40">
              <h6 className=" font-normal">
                <span>$</span>250
              </h6>
              <BsX
                size={24}
                className=" text-darkGray cursor-pointer hover:opacity-70"
              />
            </div>
          </li>
          <li className="p-24 flex justify-between">
            <div className="flex gap-16">
              <Image
                src="/images/home/live/liveComingImg1.png"
                alt="liveComingImg1"
                width={80}
                height={80}
                className="w-80 h-80"
              />
              <div className="">
                <h6 className=" font-normal">夢幻柳橙夏悠</h6>
                <div className="text-14 flex gap-8">
                  <p>
                    NT$<span>250</span>
                  </p>
                  <p className=" text-lightGray line-through">299</p>
                </div>
              </div>
            </div>
            <div className="text-18">小份 (213g)</div>
            <div>
              <div className="flex gap-x-12 items-center">
                <Image
                  src="/images/cart/dec.png"
                  alt="dec"
                  width={20}
                  height={20}
                  className="w-20 h-20 cursor-pointer hover:opacity-70"
                />
                <p className="text-18">1</p>
                <Image
                  src="/images/cart/plus.png"
                  alt="plus"
                  width={20}
                  height={20}
                  className="w-20 h-20 cursor-pointer hover:opacity-70"
                />
              </div>
            </div>
            <div className=" flex gap-40">
              <h6 className=" font-normal">
                <span>$</span>250
              </h6>
              <BsX
                size={24}
                className=" text-darkGray cursor-pointer hover:opacity-70"
              />
            </div>
          </li>
          <li className="p-24 flex justify-between">
            <div className="flex gap-16">
              <Image
                src="/images/home/live/liveComingImg1.png"
                alt="liveComingImg1"
                width={80}
                height={80}
                className="w-80 h-80"
              />
              <div className="">
                <h6 className=" font-normal">夢幻柳橙夏悠</h6>
                <div className="text-14 flex gap-8">
                  <p>
                    NT$<span>250</span>
                  </p>
                  <p className=" text-lightGray line-through">299</p>
                </div>
              </div>
            </div>
            <div className="text-18">小份 (213g)</div>
            <div>
              <div className="flex gap-x-12 items-center">
                <Image
                  src="/images/cart/dec.png"
                  alt="dec"
                  width={20}
                  height={20}
                  className="w-20 h-20 cursor-pointer hover:opacity-70"
                />
                <p className="text-18">1</p>
                <Image
                  src="/images/cart/plus.png"
                  alt="plus"
                  width={20}
                  height={20}
                  className="w-20 h-20 cursor-pointer hover:opacity-70"
                />
              </div>
            </div>
            <div className=" flex gap-40">
              <h6 className=" font-normal">
                <span>$</span>250
              </h6>
              <BsX
                size={24}
                className=" text-darkGray cursor-pointer hover:opacity-70"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white col-span-3 p-20 rounded-20 h-[110px] flex flex-col gap-8 items-center">
        <div className="flex items-center gap-8">
          <LogoImg widthProps={32} heightProps={32} />
          <p>兩件商品總計</p>
        </div>
        <h5 className=' text-primary-green font-bold'><span>$</span>500</h5>
      </div>
      <Link
        href="/productshop"
        className=" font-bold text-primary-green flex items-center justify-end col-span-9 hover:opacity-60 mb-32">
        <p>繼續購物</p>
        <BsChevronRight
          size={16}
          className=" font-bold text-primary-green"
          style={{
            strokeWidth: 2,
          }}
        />
      </Link>
    </>
  );
};

export default CartList;
