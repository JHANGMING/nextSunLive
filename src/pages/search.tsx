import Layout from '@/common/Layout';
import SearchPage from '@/modules/ProductPage/SearchPage';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
const ProductSearch = () => {
  return (
    <Layout pageCategory="searchPage">
      <ProductsRefProvider>
        <SearchPage />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductSearch;
