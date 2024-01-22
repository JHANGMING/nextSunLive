import Banner from '@/common/components/ProductPage/Banner';
import CategorySection from './CategorySection';
import DiscountedSection from './DiscountedSection';
import PopularSection from './PopularSection';
import SeasonalSection from './SeasonalSection';
import AllProductSection from './AllProductSection';
import useProductRefs from '@/common/hooks/useProductRefs';
import SearchSection from './SearchSection';


const ProductPage = () => {
  const refs=useProductRefs()
  return (
    <>
      <Banner />
      <main>
        
        {/* <SearchSection/> */}
        <CategorySection {...refs} />
        <DiscountedSection discountedProductsRef={refs.discountedProductsRef} />
        <PopularSection popularProductsRef={refs.popularProductsRef} />
        <SeasonalSection seasonalProductsRef={refs.seasonalProductsRef} />
        <AllProductSection allProductsRef={refs.allProductsRef} />
      </main>
    </>
  );
};

export default ProductPage;
