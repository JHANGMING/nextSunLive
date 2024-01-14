import { ReactNode } from 'react'

export type PageCategoryType = 'liveStreamPage' | 'productPage' | 'landingPage' | 'loginPage' | 'registerPage'


export type LayoutPropsType = {
  children?: ReactNode
  pageCategory: PageCategoryType
}
