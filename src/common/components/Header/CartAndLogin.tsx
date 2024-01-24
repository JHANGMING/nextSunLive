import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import CartItemCount from '../../../modules/Header/CartItemCount';
import { useState } from 'react';
const CartAndLogin = () => {
   const [showDropdown, setShowDropdown] = useState(false);

   const toggleDropdown = () => {
     setShowDropdown(!showDropdown);
   };
  return (
    <>
      <Link
        href="/cart"
        className="relative flex h-50 w-50 items-center justify-center rounded-full bg-primary-yellow shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3">
        <LuShoppingCart size={32} />
        <CartItemCount />
      </Link>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3 rounded-full">
          <BsPersonCircle size={40} className="text-primary-yellow" />
        </button>
        {showDropdown && (
          <div className="absolute right-16 top-60 py-24 px-20 w-[196px] bg-white z-50 border-4 border-primary-yellow rounded-12 rounded-tr-none">
            <Link
              href="/auth/login"
              className=" bg-primary-yellow py-8 w-full block rounded-8 text-center mb-8 hover:font-bold">
              會員登入
            </Link>
            <Link
              href="/auth/register"
              className="border border-primary-yellow py-8 w-full block rounded-8 text-center hover:font-bold">
              註冊新會員
            </Link>
            <div className="mt-16 border-t border-lightGray pt-20">
              <p className="mb-8">我的帳戶</p>
              <p>訂單查詢</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartAndLogin;
