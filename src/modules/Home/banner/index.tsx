import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/zoom'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { bannerImgData } from './data'
import BannerTitle from './BannerTitle'
const Banner = () => {
  return (
    <section className="relative mb-120">
      <BannerTitle />
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
      <Image src="/images/grassMotionLeft.png" alt="bannerMotionLeft" width={546} height={136} className=" absolute bottom-0 left-0 z-20" />
      <Image src="/images/grassMotionRight.png" alt="bannerMotionRight" width={489} height={136} className=" absolute bottom-0 right-0 z-20" />
    </section>
  )
}

export default Banner
