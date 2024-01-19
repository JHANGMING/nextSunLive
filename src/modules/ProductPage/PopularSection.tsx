import ProductList from "@/common/components/product/ProductList";
import CategoryTitle from "./CategoryTitle";
import { RefObject } from 'react';
type PopularSectionProps = {
  popularProductsRef: RefObject<HTMLDivElement>;
};
const PopularSection = ({ popularProductsRef }: PopularSectionProps) => {
  return (
    <section className="bg-white pt-60 pb-[200px]" ref={popularProductsRef}>
      <div className="container">
        <CategoryTitle title="熱門農產品" gapStyle="mb-24" />
        <ProductList category="popular" />
      </div>
    </section>
  );
};
 
export default PopularSection;