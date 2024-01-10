import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
const FarmSwiper = () => {
  return (
    <div className="farm">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={false}
        slidesOffsetBefore={0}
        modules={[Autoplay]} // 添加Autoplay模块
        spaceBetween={8} // 幻灯片之间的间隔
        // slidesPerView={4} // 在Swiper中一次显示的幻灯片数量
        loop={true} // 循环模式
        speed={1000}
        autoplay={{
          // 启用自动播放并设置选项
          delay: 1500, // 每个幻灯片切换的延时
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((number) => (
          <SwiperSlide key={number}>
            <Image src={`/images/friendlyFarm/farmImg${number}.png`} alt={`friendlyFarm-${number}`} width={378} height={282} className=" object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FarmSwiper
