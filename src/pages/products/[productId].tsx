import { useRouter } from "next/router";

const ProductDetail = () => {
  const router=useRouter()
  console.log(router.query);
  
  return (<>
  這是商品內文頁
  </>);
}
 
export default ProductDetail;