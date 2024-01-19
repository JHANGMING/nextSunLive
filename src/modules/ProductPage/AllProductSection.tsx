import ProductList from "@/common/components/product/ProductList";
import CategoryTitle from "./CategoryTitle";
import { RefObject } from 'react';
type AllProductSectionProps = {
  allProductsRef: RefObject<HTMLDivElement>;
};
const AllProductSection = ({ allProductsRef }: AllProductSectionProps) => {
  return (
    <section className="container py-60 mb-100" ref={allProductsRef}>
      <CategoryTitle title="所有農產品" gapStyle="mb-24" />
      <ProductList category="all" />
    </section>
  );
};
 
export default AllProductSection;