import Layout from '@/common/Layout';
import ProductPage from '@/modules/ProductPage';
import { ProductsRefProvider } from '@/common/hooks/ProductsRefContext';
const ProductShop = () => {
  return (
    <Layout pageCategory="productPage">
      <ProductsRefProvider>
        <ProductPage />
      </ProductsRefProvider>
    </Layout>
  );
};

export default ProductShop;
