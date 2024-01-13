import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { grassMotionSet } from '@/constants/globaIIcon'
import { bannerImgData } from './data'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/zoom'
import BannerTitle from './BannerTitle'
import BannerInput from '../../Input/BannerInput'
const Banner = () => {
  return (
    <section className="relative mb-120">
      <div className="absolute top-1/2 left-1/2 z-10 text-center transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-16">
        <BannerTitle />
        <BannerInput />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={4000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="bannerSwiper"
      >
        {bannerImgData.map((data) => (
          <SwiperSlide key={data.alt}>{({ isVisible }) => <Image {...data} className={`object-cover transition-transform duration-[8000ms] ease-in-out ${isVisible ? 'scale-150' : 'scale-125'}`} />}</SwiperSlide>
        ))}
      </Swiper>
      <Image {...grassMotionSet.grassMotionLeft} width={546} height={136} className=" absolute bottom-0 left-0 z-20" />
      <Image {...grassMotionSet.grassMotionRight} width={489} height={136} className=" absolute bottom-0 right-0 z-20" />
    </section>
  )
}

export default Banner
