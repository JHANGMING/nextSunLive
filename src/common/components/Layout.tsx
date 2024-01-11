import { FC, ReactNode } from 'react'
import Header from '@/modules/Header'
import Footer from './footer'
type LayoutPropsType = {
  children: ReactNode
}
const Layout: FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Layout
