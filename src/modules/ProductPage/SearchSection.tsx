import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from './CategoryTitle';

const SearchSection = () => {
  return (
    <section className="bg-searchBannerBG bg-no-repeat  -mt-[216px] pt-120 pb-60">
      <div className="container">
        <CategoryTitle title="搜尋結果" gapStyle="mb-8" />
        <h4 className="mb-24">
          玉米的搜尋結果共 <span className=" text-primary-green">3</span> 筆
        </h4>
        <ProductList category="search" />
      </div>
    </section>
  );
};

export default SearchSection;
