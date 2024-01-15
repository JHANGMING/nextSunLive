import { PageCategoryType } from "@/common/Layout/data";

export const navBarDatas = [
  {
    src: '/',
    title: '關於我們',
    subTitle: 'About',
  },
  {
    src: '/liveStream',
    title: '直播特惠',
    subTitle: 'Live',
  },
  {
    src: '/productShop',
    title: '商品總覽',
    subTitle: 'Products',
  },
]
export const logoData = {
  title: '搶鮮購'
}

export const pageSet: PageSet = {
  landingPage: true,
  liveStreamPage: true,
  productPage: true,
  authPage: false,
}
export type PageSet= {
  [key in PageCategoryType]?: boolean
}