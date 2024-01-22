import Header from '@/common/components/Header';
import Footer from '../components/Footer';
import { LayoutPropsType, colorWhiteSet, footerSet } from './data';
import CustomHead from '../components/CustomHead';
import AuthLayout from './AuthLayout';
import FixedHeader from '../components/Header/FixedHeader';

const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  const backgroundColorClass = colorWhiteSet[pageCategory]
    ? 'bg-white'
    : 'bg-lightWhite';
  const gapClassSyle = footerSet[pageCategory]  ? 'pt-60' : 'pt-42';
  return (
    <div className={backgroundColorClass}>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <FixedHeader pageCategory={pageCategory} />
      {pageCategory === 'authPage' ? (
        <AuthLayout classStyle={classStyle}>{children}</AuthLayout>
      ) : (
        children
      )}
      <Footer gapClassSyle={gapClassSyle} pageCategory={pageCategory} />
    </div>
  );
};

export default Layout;
