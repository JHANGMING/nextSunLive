import { ReactNode } from 'react'

export type PageCategoryType = 'liveStreamPage' | 'productPage' | 'landingPage' | 'authPage' 


export type LayoutPropsType = {
  children?: ReactNode
  pageCategory: PageCategoryType
}
