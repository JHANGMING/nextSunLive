import Header from '@/common/components/Header';
import Footer from '../components/Footer';
import { LayoutPropsType } from './data';
import CustomHead from '../components/CustomHead';
import AuthLayout from './AuthLayout';

const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  const backgroundColorClass =
    pageCategory === 'authPage' ? 'bg-white' : 'bg-lightWhite';
  return (
    <div className={backgroundColorClass}>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      {pageCategory === 'authPage' ? (
        <AuthLayout classStyle={classStyle}>{children}</AuthLayout>
      ) : (
        children
      )}
      <Footer />
    </div>
  );
};

export default Layout;
