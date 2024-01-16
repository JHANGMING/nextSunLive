import Image from "next/image";
import CategoryProductTag from "./CategoryProductTag";

const CategorySection = () => {
  return (
    <section className="container py-60">
      <div className="grid grid-rows-2 grid-cols-12 gap-24">
        <div className="row-start-1 row-span-2 col-span-4 relative ">
          <CategoryProductTag
            text="特價農產品"
            classStyle="bottom-24 left-24 "
          />
          <Image
            src="/images/productShop/discountedProducts.png"
            alt="discountedProducts"
            width={422}
            height={543}
            className="h-full hover:opacity-70 border-4 border-primary-yellow rounded-25"
          />
        </div>
        <div className="row-start-1 row-span-1 col-span-4 relative">
          <CategoryProductTag text="熱門農產品" classStyle="top-24 left-24" />
          <Image
            src="/images/productShop/popularProducts.png"
            alt="popularProducts"
            width={416}
            height={258}
            className="hover:opacity-70 border-4 border-primary-yellow rounded-25"
          />
        </div>
        <div className="row-start-2 row-span-1 col-span-4 relative">
          <CategoryProductTag
            text="所有農產品"
            classStyle="bottom-24 left-24"
          />
          <Image
            src="/images/productShop/allProducts.png"
            alt="allProducts"
            width={416}
            height={258}
            className="hover:opacity-70 border-4 border-primary-yellow rounded-25"
          />
        </div>
        <div className="row-start-1 row-span-2 col-span-4 relative">
          <CategoryProductTag text="當季農產品" classStyle="top-24 right-24" />
          <Image
            src="/images/productShop/seasonalProducts.png"
            alt="seasonalProducts"
            width={422}
            height={543}
            className="h-full hover:opacity-70 border-4 border-primary-yellow rounded-25"
          />
        </div>
      </div>
    </section>
  );
}
 
export default CategorySection;