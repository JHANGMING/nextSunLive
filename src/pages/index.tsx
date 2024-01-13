import HomeSwiper from '@/common/components/homeSwiper'
import ScrollPageTop from '@/common/components/ScrollPageTop'
import ComingProductsSection from '@/modules/Home/ComingProductsSection'
import Banner from '@/common/components/Home/banner'
import FarmFeatureSection from '@/common/components/Home/farmFeatureSection'
import FriendlyFarmSection from '@/common/components/Home/friendlyFarmSection'
import LivingShowSection from '@/modules/Home/livingShowSection'
import ProductListSection from '@/modules/Home/productListSection'
import RecommendSection from '@/common/components/RecommendSection'

export default function Home() {
  return (
    <main>
      <ScrollPageTop />
      <Banner />
      <FriendlyFarmSection />
      <HomeSwiper imgData="farmDatas" />
      <FarmFeatureSection />
      <LivingShowSection />
      <ComingProductsSection />
      <RecommendSection/>
      <ProductListSection />
      <HomeSwiper imgData="farmerDatas" />
    </main>
  )
}
