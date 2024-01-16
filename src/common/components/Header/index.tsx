import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import NavBar from './Navbar';
import { pageSet } from './data';
import { LayoutPropsType } from '@/common/Layout/data';
import Logo from '@/common/components/Logo';
import CartItemCount from '../../../modules/Header/CartItemCount';
const Header = ({ pageCategory }: LayoutPropsType) => {
  const isShow = pageSet[pageCategory];

  return (
    <>
      {isShow ? (
        <header className="bg-white flex absolute left-1/2 top-60 z-20 max-w-full -translate-x-1/2 transform items-center rounded-25 gap-60 px-32 py-16">
          <NavBar />
          <div className="relative flex items-center gap-38">
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
          </div>
        </header>
      ) : (
        <header>
          <Logo classStyle="justify-center py-64" />
        </header>
      )}
    </>
  );
};

export default Header;
