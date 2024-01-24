import { useEffect, useState } from 'react';
import { fixedPageSet } from './data';
import { LayoutPropsType } from '@/common/Layout/data';
import Logo from '../Logo';
import CartAndLogin from './CartAndLogin';
import { BsSearch } from 'react-icons/bs';
import SearchInput from '../Input/SearchInput';
const FixedHeader = ({ pageCategory }: LayoutPropsType) => {
  const headerBehavior = fixedPageSet[pageCategory];
  const [isVisible, setIsVisible] = useState(headerBehavior === 'always');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    console.log('click');
    
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    switch (headerBehavior) {
      case 'always':
        setIsVisible(true);
        break;
      case 'never':
        return;
      case 'scroll':
        const toggleVisibility = () => {
          if (typeof window !== 'undefined') {
            setIsVisible(window.pageYOffset > 500);
          }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
      default:
        setIsVisible(false);
    }
  }, [headerBehavior]);

  const isVisibleClass = isVisible
    ? 'opacity-100'
    : 'opacity-0';
  const heightClass = headerBehavior === 'always' ? 'h-[98px]' : 'h-60 fixed';
  if (headerBehavior === 'never') {
    return null;
  }
  return (
    <div
      className={` ${isVisibleClass} ${heightClass} top-0 left-0 bg-white z-30 w-full flex justify-between items-center px-72 transition-opacity duration-10000 ease-in-out`}>
      <div className="w-400">
        {!isSearchActive && (
          <div
            className={`bg-primary-yellow w-53 h-48 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80`}
            onClick={handleSearchClick}>
            <BsSearch className="text-20 text-mediumGray" />
          </div>
        )}
        {isSearchActive && (
          <SearchInput headerVisible={true} onClick={handleSearchClick} />
        )}
      </div>
      <div className=" flex justify-center">
        <Logo widthProps={32} heightProps={32} />
      </div>
      <div className="flex gap-40 items-center justify-end w-400">
        <CartAndLogin />
      </div>
    </div>
  );
};

export default FixedHeader;
