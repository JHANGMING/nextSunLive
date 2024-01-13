import ProductCard from './ProductCard'
import { productData } from './data'
type ProductListProps = {
  category: string
}
const ProductList = ({ category }: ProductListProps) => {
  if (category === 'landingPage') {
    return (
      <ul className="grid grid-cols-12 gap-x-24 gap-y-84">
        {productData.map((data) => (
          <ProductCard key={data.title} {...data} />
        ))}
      </ul>
    )
  }
  return null;
}

export default ProductList
