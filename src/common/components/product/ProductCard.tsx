import Image from 'next/image';
import Button from '../Button';
import { ProductCardProps } from './data';
import LogoImg from '@/common/components/Logo/LogoImg';

const ProductCard = ({
  productImg,
  title,
  des,
  originalPrice,
  salePrice,
}: ProductCardProps) => {
  const handlerAddCart = () => {
    console.log('2222');
  };
  return (
    <li className=" col-span-4 flex flex-col gap-16">
      <Image
        src={productImg.src}
        alt={productImg.alt}
        width={416}
        height={381}
        className=" hover:opacity-50 border-dashed border-4 border-primary-yellow rounded-20 transition duration-800 ease-in-out"
      />
      <div className="flex gap-16 justify-center">
        <LogoImg widthProps={32} heightProps={32} classProps="w-32 h-32" />
        <h3 className=' text-primary-green'>{title}</h3>
      </div>
      <p className="px-24">{des}</p>
      <div className=" flex justify-between px-24">
        <div className="flex gap-8 items-center">
          <p className=" text-primary-red py-6 px-20 rounded-8 border border-primary-red text-center font-bold">
            價格
          </p>
          <h4>{salePrice}</h4>
          <span className=" text-lightGray font-bold text-20 line-through">
            {originalPrice}
          </span>
        </div>
        <Button category="addCart" onClick={handlerAddCart}>
          加入購物車
        </Button>
      </div>
    </li>
  );
};

export default ProductCard;
