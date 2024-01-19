import NavBar from './Navbar';
import { pageSet } from './data';
import { LayoutPropsType } from '@/common/Layout/data';
import Logo from '@/common/components/Logo';
import CartAndLogin from './CartAndLogin';
const Header = ({ pageCategory }: LayoutPropsType) => {
  const isShow = pageSet[pageCategory];

  if (!isShow) {
    return (
      <header>
        <Logo classStyle="justify-center py-64" />
      </header>
    );
  }

  return (
    <header className="bg-white flex absolute left-1/2 top-60 z-20 max-w-full -translate-x-1/2 transform items-center rounded-25 gap-60 px-32 py-16">
      <NavBar />
      <div className="relative flex items-center gap-38">
        <CartAndLogin />
      </div>
    </header>
  );
};

export default Header;
