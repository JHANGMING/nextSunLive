export type ProductCardProps = {
  title: string
  des: string
  originalPrice: number
  salePrice: number
  productImg: {
    src: string
    alt: string
  }
}
export const productData: ProductCardProps[] = [
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product1',
    },
  },
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product2',
    },
  },
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
  {
    title: '紫禧有機天使茄',
    des: '採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。',
    originalPrice: 299,
    salePrice: 199,
    productImg: {
      src: '/images/product/product1.png',
      alt: 'product3',
    },
  },
]
{
  /* <li className=" col-span-4 flex flex-col gap-16">
      <Image src="/images/product/product1.png" alt="product1" width={416} height={381} className=" hover:opacity-50 border-dashed border-4 border-primary-yellow rounded-20" />
      <div className="flex gap-16 justify-center">
        <Image {...globalIconSet.logoImage} width={32} height={32} className=" w-32 h-32 " />
        <h3>紫禧有機天使茄</h3>
      </div>
      <p className="px-24">採摘自有機農園，紫禧有機天使茄散發著深邃的紫色，宛如天使的羽翼。</p>
      <div className=" flex justify-between px-24">
        <div className="flex gap-8 items-center">
          <p className=" text-primary-red py-6 px-20 rounded-8 border border-primary-red text-center font-bold">價格</p>
          <h4>199</h4>
          <span className=" text-lightGray font-bold text-20 line-through">299</span>
        </div>
        <Button category="addCart">加入購物車</Button>
      </div>
    </li> */
}
