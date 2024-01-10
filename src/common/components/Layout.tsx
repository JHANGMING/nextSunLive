import { FC, ReactNode } from 'react'
import Header from '@/modules/Header'
type LayoutPropsType = {
  children: ReactNode
}
const Layout: FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
