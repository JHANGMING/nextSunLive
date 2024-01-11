import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { SwiperData, swiperData } from './data'
const HomeSwiper = ({ imgData }: HomeSwiperPropsType) => {
  const data = swiperData[imgData]
  if (!data) return null
  const { spaceBetween, imgDatas } = data

  return (
    <div className="homeSwiper">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={false}
        slidesOffsetBefore={0}
        modules={[Autoplay]}
        spaceBetween={spaceBetween} // 幻燈片間隔
        // slidesPerView={4} // 在Swiper中一次顯示幻燈片數量
        loop={true}
        speed={8000}
        autoplay={{
          delay: 1, //幻燈片切換延遲
          disableOnInteraction: false, // 操作swiper，是否禁止
        }}
      >
        {imgDatas.map((data) => (
          <SwiperSlide key={data.alt}>
            <Image {...data} width={378} height={282} className=" object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeSwiper
type HomeSwiperPropsType = {
  imgData: keyof typeof swiperData
}
