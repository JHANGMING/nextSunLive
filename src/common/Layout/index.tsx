import Header from '@/common/components/Header';
import Footer from '../components/Footer';
import { LayoutPropsType, colorWhiteSet, footerSet } from './data';
import CustomHead from '../components/CustomHead';
import AuthLayout from './AuthLayout';
import FixedHeader from '../components/Header/FixedHeader';
import ScrollPageTop from '../components/ScrollPageTop';
import ContactService from '@/modules/ContactService';

const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  const backgroundColorClass = colorWhiteSet[pageCategory]
  const gapClassSyle = footerSet[pageCategory] 
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
      {pageCategory === 'authPage' || <ContactService />}
      <ScrollPageTop />
      <Footer gapClassSyle={gapClassSyle} pageCategory={pageCategory} />
    </div>
  );
};

export default Layout;
