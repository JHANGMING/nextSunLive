import Image from 'next/image';
import { ProductDataProps } from './data';

const UpcomingProduct = ({ ...data }: ProductDataProps) => {
  const {
    price,
    title,
    personName,
    date,
    productImage,
    personImage,
    classStyle,
  } = data;

  return (
    <li className={`flex gap-24 ${classStyle}`}>
      <div className=" relative group">
        <Image
          src={productImage.src}
          alt={productImage.alt}
          width={240}
          height={200}
          className="border-2 border-dashed border-primary-red outline outline-8 outline-primary-red rounded-20 h-[200px] "
        />
        <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white  text-primary-red opacity-0 group-hover:opacity-80 transition-opacity duration-500 w-[137px] h-48 rounded-18">
          Coming Soon
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <p className="border border-dashed border-primary-red text-primary-red rounded-50 py-10 w-[67px] text-center">
          $ {price}
        </p>
        <h5 className="border-b border-black font-bold text-mediumGray">
          {title}
        </h5>
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 items-center">
            <Image
              src={personImage.src}
              alt={personImage.alt}
              width={40}
              height={40}
            />
            <p className=" text-primary-green">{personName}</p>
          </div>
          <time className="text-primary-green">{date}</time>
        </div>
      </div>
    </li>
  );
};

export default UpcomingProduct;
