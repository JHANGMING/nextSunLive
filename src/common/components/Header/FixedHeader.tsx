import { useEffect, useState } from 'react';
import { fixedPageSet } from './data';
import { LayoutPropsType } from '@/common/Layout/data';
import Logo from '../Logo';
import CartAndLogin from './CartAndLogin';
import { BsSearch } from 'react-icons/bs';
import SearchInput from '../Input/SearchInput';
const FixedHeader = ({ pageCategory }: LayoutPropsType) => {
  const isShow = fixedPageSet[pageCategory];
  const [isVisible, setIsVisible] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
   
    setIsSearchActive(!isSearchActive);
  };
  const toggleVisibility = () => {
    if (typeof window === 'undefined') return;
    const checkScroll = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.requestAnimationFrame(checkScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const isVisibleClass = isVisible ? 'opacity-100' : 'opacity-0';
 
  if (!isShow) {
    return null;
  }
    return (
      
      <div
        className={` ${isVisibleClass} h-60 fixed top-0 left-0 bg-white z-30 w-full flex justify-between items-center transition-opacity duration-1000 ease-in-out px-72`}>
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
          <Logo widthProps={32} heightProps={32}/>
        </div>
        <div className="flex gap-40 items-center justify-end w-400">
          <CartAndLogin />
        </div>
      </div>
    );
};

export default FixedHeader;
