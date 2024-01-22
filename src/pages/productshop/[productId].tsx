import Layout from '@/common/Layout';
import ProductDetailPage from '@/modules/ProductDetailPage';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  return (
    <Layout pageCategory="productDetailPage">
      <ProductDetailPage />
    </Layout>
  );
};

export default ProductDetail;
