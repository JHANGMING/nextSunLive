import HomeSwiper from '@/common/components/HomeSwiper';
import ScrollPageTop from '@/common/components/ScrollPageTop';
import ComingProductsSection from '@/modules/LandingPage/ComingProductsSection';
import Banner from '@/common/components/LandingPage/banner';
import FarmFeatureSection from '@/common/components/LandingPage/farmFeatureSection';
import FriendlyFarmSection from '@/common/components/LandingPage/friendlyFarmSection';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
import ProductListSection from '@/modules/LandingPage/productListSection';
import RecommendSection from '@/common/components/LandingPage/RecommendSection';
import FixedHeader from '@/common/components/Header/FixedHeader';
const LandingPage = () => {
  return (
    <main>
      <Banner />
      <FriendlyFarmSection />
      <HomeSwiper imgData="farmDatas" />
      <FarmFeatureSection />
      <LivingShowSection />
      <ComingProductsSection />
      <RecommendSection />
      <ProductListSection />
    </main>
  );
};

export default LandingPage;
