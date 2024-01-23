import Banner from '@/common/components/ProductPage/Banner';
import CategorySection from './CategorySection';
import DiscountedSection from './DiscountedSection';
import PopularSection from './PopularSection';
import SeasonalSection from './SeasonalSection';
import AllProductSection from './AllProductSection';

const ProductPage = () => {
  return (
    <>
      <Banner />
      <main>
        <CategorySection />
        <DiscountedSection />
        <PopularSection />
        <SeasonalSection />
        <AllProductSection />
      </main>
    </>
  );
};

export default ProductPage;
