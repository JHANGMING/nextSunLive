import Link from 'next/link';
import { BsHandIndex } from 'react-icons/bs';
type LinkToProductProps = {
  path: string;
};
const LinkToProduct = ({ path }: LinkToProductProps) => {
  return (
    <Link
      href={path}
      className="group flex items-center justify-end gap-8 self-start col-start-11 col-end-13 mb-40">
      <p className="font-bold">商品一覽</p>
      <BsHandIndex className="rotate-90 w-44 h-44 bg-primary-red text-white px-10 rounded-full group-hover:bg-primary-yellow" />
    </Link>
  );
};

export default LinkToProduct;
