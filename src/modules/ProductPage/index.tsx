
import Banner from "@/common/components/ProductPage/Banner";
import CategorySection from "./CategorySection";
import DiscountedSection from './DiscountedSection';
import PopularSection from "./PopularSection";
import SeasonalSection from "./SeasonalSection";
import AllProductSection from "./AllProductSection";
import HomeSwiper from "@/common/components/HomeSwiper";
import React, { useRef, RefObject } from 'react';

type ProductRefsType = {
  discountedProductsRef: React.RefObject<HTMLDivElement>;
  popularProductsRef: React.RefObject<HTMLDivElement>;
  allProductsRef: React.RefObject<HTMLDivElement>;
  seasonalProductsRef: React.RefObject<HTMLDivElement>;
};

const ProductPage = () => {
  const refs = useRef<ProductRefsType>({
    discountedProductsRef: React.createRef(),
    popularProductsRef: React.createRef(),
    allProductsRef: React.createRef(),
    seasonalProductsRef: React.createRef(),
  }).current;
  return (
    <main>
      <Banner />
      <CategorySection {...refs} />
      <DiscountedSection discountedProductsRef={refs.discountedProductsRef} />
      <PopularSection popularProductsRef={refs.popularProductsRef} />
      <SeasonalSection seasonalProductsRef={refs.seasonalProductsRef} />
      <AllProductSection allProductsRef={refs.allProductsRef} />
      <HomeSwiper imgData="farmerDatas"/>
    </main>
  );
};

export default ProductPage;
