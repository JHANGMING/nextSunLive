import Image from 'next/image'
import { BsHandIndex } from 'react-icons/bs'
import LinkToProduct from '@/common/components/LinkToProduct'
import Button from '@/common/components/Button'
import ProductList from '@/modules/product/ProductList'
const ProductListSection = () => {
  return (
    <section className="bg-white pt-24 pb-100">
      <div className="container">
        <LinkToProduct path="/products" />
        <ProductList category="landingPage" />
      </div>
    </section>
  )
}

export default ProductListSection
