import ProductList from "@/common/components/product/ProductList";
import CategoryTitle from "./CategoryTitle";
import { RefObject } from 'react';
import React, { createContext } from 'react';
type AllProductSectionProps = {
  allProductsRef: RefObject<HTMLDivElement>;
};
export const ProductsRefContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null);
const AllProductSection = ({ allProductsRef }: AllProductSectionProps) => {

  return (
    <ProductsRefContext.Provider value={allProductsRef}>
      <section className="container py-60 mb-100" ref={allProductsRef}>
        <CategoryTitle title="所有農產品" gapStyle="mb-24" />
        <ProductList category="all" />
      </section>
    </ProductsRefContext.Provider>
  );
};
 
export default AllProductSection;