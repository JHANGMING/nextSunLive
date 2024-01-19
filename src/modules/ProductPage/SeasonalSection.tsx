import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from './CategoryTitle';
import { RefObject } from 'react';
type SeasonalSectionProps = {
  seasonalProductsRef: RefObject<HTMLDivElement>;
};
const SeasonalSection = ({ seasonalProductsRef }: SeasonalSectionProps) => {
  return (
    <section
      className=" bg-seasonalBG pt-80 bg-no-repeat -mt-80"
      ref={seasonalProductsRef}>
      <div className="container bg-primary-yellow pb-60">
        <CategoryTitle title="當季水果" gapStyle="mb-24" />
        <ProductList category="seasonalfruit" />
        <CategoryTitle title="當季蔬菜" gapStyle="mb-24 mt-60" />
        <ProductList category="seasonalfruit" />
      </div>
    </section>
  );
};

export default SeasonalSection;
