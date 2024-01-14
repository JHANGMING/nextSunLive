
import Header from '@/modules/Header'
import Footer from '../components/Footer'
import { LayoutPropsType } from './data'
import CustomHead from '../components/CustomHead'



const Layout = ({ children, pageCategory }:LayoutPropsType) => {
  return (
    <>
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
