import DetailBanner from '@/common/components/ProductDetailPage/DetailBanner';
import DetailSection from './DetailSection';
import HomeSwiper from '@/common/components/HomeSwiper';
import IntroductSection from './IntroductSection';
import RelatedSection from './RelatedSection';

const ProductDetailPage = () => {
  return (
    <>
      <DetailBanner />
      <main>
        <DetailSection />
        <IntroductSection/>
        <RelatedSection/>
        {/* <HomeSwiper imgData="farmerDatas" classStyle="pb-20 bg-white" /> */}
      </main>
    </>
  );
};

export default ProductDetailPage;
