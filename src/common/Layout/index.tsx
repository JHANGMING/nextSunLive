import Header from '@/common/components/Header';
import Footer from '../components/Footer';
import { LayoutPropsType, colorWhiteSet, footerSet } from './data';
import CustomHead from '../components/CustomHead';
import AuthLayout from './AuthLayout';
import FixedHeader from '../components/Header/FixedHeader';
import ScrollPageTop from '../components/ScrollPageTop';
import ContactService from '@/modules/ContactService';
import { Noto_Sans_TC } from 'next/font/google';
const notos = Noto_Sans_TC({
  weight: ['400',"600", '700'],
  subsets: ['latin'],
});
const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  return (
    <div
      className={`${colorWhiteSet[pageCategory]} ${notos.className} flex flex-col min-h-screen`}>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <FixedHeader pageCategory={pageCategory} />
      <main className="flex-grow">
        {pageCategory === 'authPage' ? (
          <AuthLayout classStyle={classStyle}>{children}</AuthLayout>
        ) : (
          children
        )}
        {pageCategory === 'authPage' || <ContactService />}
        <ScrollPageTop />
      </main>
      <Footer
        gapClassSyle={footerSet[pageCategory]}
        pageCategory={pageCategory}
      />
    </div>
  );
};

export default Layout;
