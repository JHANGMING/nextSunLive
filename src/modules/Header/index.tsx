import Link from 'next/link'
import { LuShoppingCart } from 'react-icons/lu'
import { BsPersonCircle } from 'react-icons/bs'
import NavBar from './Navbar'
import Cart from './addCart'
const Header = () => {
  return (
    <header className=" bg-white absolute left-1/2 top-60 z-20 flex max-w-full -translate-x-1/2 transform items-center rounded-25 gap-60 px-32 py-16">
      <NavBar />
      <div className="relative flex items-center gap-38">
        <Link href="/cart" className="relative flex h-50 w-50 items-center justify-center rounded-full bg-primary-yellow shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3">
          <LuShoppingCart size={32} />
          <Cart />
        </Link>
        <Link href="/auth" className="shadow-headerIcon hover:shadow-none transform transition-shadow duration-300 ease-in-out hover:transform hover:translate-x-3 hover:translate-y-3 rounded-full">
          <BsPersonCircle size={40} className=" text-primary-yellow" />
        </Link>
      </div>
    </header>
  )
}

export default Header
