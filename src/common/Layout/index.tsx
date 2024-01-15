import Header from '@/common/components/Header'
import Footer from '../components/Footer'
import { LayoutPropsType } from './data'
import CustomHead from '../components/CustomHead'
import AuthLayout from './AuthLayout'

const Layout = ({ children, pageCategory, classStyle }: LayoutPropsType) => {
  return (
    <>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      {pageCategory === 'authPage' ? <AuthLayout classStyle={classStyle}>{children}</AuthLayout> : children}
      <Footer />
    </>
  )
}

export default Layout
