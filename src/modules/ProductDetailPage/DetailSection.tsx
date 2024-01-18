import Button from "@/common/components/Button";
import HomeSwiper from "@/common/components/HomeSwiper";
import LogoImg from "@/common/components/Logo/LogoImg";
import Image from "next/image";
import { useState } from "react";
import {
  BsFillGeoFill,
  BsDashCircleFill,
  BsPlusCircleFill,
} from 'react-icons/bs';

const DetailSection = () => {
  const [count, setCount] = useState(0);
  const updateCount = (isIncrement:boolean) => {
    setCount((prevCount) => (isIncrement ? prevCount + 1 : prevCount - 1));
  };
  const handlerAddCart = () => {
    console.log('2222');
  };
  const handlerToBuy=()=>{
    console.log('handlerToBuy');
    
  }
  return (
    <section className="pt-[280px]">
      <div className="bg-detailBG bg-center h-[644px] container grid grid-cols-12 gap-24 py-102">
        <Image
          src="/images/productDetail/detailImg1.svg"
          alt="detailImg1"
          width={636}
          height={440}
          className=" col-span-6"
        />
        <div className="col-span-6 ml-16">
          <div className="flex gap-16 mb-16">
            <LogoImg widthProps={50} heightProps={50} />
            <h2>甜蜜時光有機草莓</h2>
          </div>
          <p className=" text-18 mb-16">
            在我們溫網室內，透過完全無農藥的種植方式，獲得了友善驗證。我們精心自製液肥，並以生物防治維持作物健康。全年生產穩定且乾淨的有機草莓，為您帶來環境友善的新鮮水果。
          </p>
          <div className="flex gap-8 items-center mb-26">
            <p className=" text-primary-red py-6 px-20 rounded-8 border border-primary-red text-center font-bold mr-8">
              價格
            </p>
            <h4 className="text-primary-red">250</h4>
            <span className=" text-lightGray font-bold text-14 line-through">
              500
            </span>
          </div>
          <div className="flex gap-24 mb-16">
            <ul className="flex flex-col gap-20">
              <li className="flex gap-8 items-center">
                <Image
                  src="/images/productDetail/farmerImg.svg"
                  alt="farmerImg"
                  width={40}
                  height={40}
                  className="w-40 h-40 rounded-full border-2 border-primary-yellow"
                />
                <p>小農</p>
                <h6 className=" text-16 font-normal">陳雅安</h6>
              </li>
              <li className="flex gap-8 items-center">
                <BsFillGeoFill
                  size={40}
                  className=" bg-primary-yellow rounded-full p-8"
                />
                <p>產地</p>
                <h6 className=" text-16 font-normal">苗栗市</h6>
              </li>
            </ul>
            <div className=" bg-primary-green flex gap-8 h-[37px] px-8 items-center rounded-8 hover:opacity-60 cursor-pointer">
              <Image
                src="/images/productDetail/chatIcon.svg"
                alt="chatIcon"
                width={20}
                height={19}
              />
              <p className="text-14 text-white">跟小農聊聊</p>
            </div>
          </div>
          <div className="flex gap-16 items-center mb-24">
            <BsDashCircleFill
              size={24}
              className=" text-lightGray cursor-pointer"
              onClick={() => updateCount(false)}
            />
            <input
              type="text"
              className="w-full h-40 border border-darkGray rounded-8 text-center font-bold"
              value={count}
              readOnly
            />
            <BsPlusCircleFill
              size={24}
              className=" text-lightGray cursor-pointer"
              onClick={() => updateCount(true)}
            />
          </div>
          <div className="flex gap-24">
            <Button
              category="addCart"
              onClick={handlerAddCart}
              showIcon={false}
              btnStyle="bg-white border-primary-red w-full flex justify-center"
              textStyle="text-primary-red">
              加入購物車
            </Button>
            <Button
              category="addCart"
              onClick={handlerToBuy}
              btnStyle="bg-primary-red border-white w-full flex justify-center"
              textStyle="text-white">
              立即購買
            </Button>
          </div>
        </div>
      </div>
      <HomeSwiper imgData="farmerDatas" classStyle="pb-20 bg-white"/>
    </section>
  );
}
 
export default DetailSection;