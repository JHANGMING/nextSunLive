import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import CartItemCount from '../../../modules/Header/CartItemCount';
const CartAndLogin = () => {
  return (
    <>
      <Link
        href="/cart"
        className="relative flex h-50 w-50 items-center justify-center rounded-full bg-primary-yellow shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3">
        <LuShoppingCart size={32} />
        <CartItemCount />
      </Link>
      <Link
        href="/auth/login"
        className="shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3 rounded-full">
        <BsPersonCircle size={40} className=" text-primary-yellow" />
      </Link>
    </>
  );
};

export default CartAndLogin;
