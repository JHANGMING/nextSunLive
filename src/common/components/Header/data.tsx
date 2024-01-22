import { PageCategoryType } from '@/common/Layout/data';

export const navBarDatas = [
  {
    src: '/',
    title: '關於我們',
    subTitle: 'About',
  },
  {
    src: '/livestream',
    title: '直播特惠',
    subTitle: 'Live',
  },
  {
    src: '/productshop',
    title: '商品總覽',
    subTitle: 'Products',
  },
];
export const logoData = {
  title: '搶鮮購',
};

export const pageSet: PageSet = {
  landingPage: true,
  liveStreamPage: true,
  liveStreamView: true,
  productPage: true,
  productDetailPage: true,
  authPage: false,
};

export const fixedPageSet: PageSet = {
  landingPage: true,
  liveStreamPage: true,
  liveStreamView: false,
  productPage: true,
  productDetailPage: false,
  authPage: false,
};

export type PageSet = {
  [key in PageCategoryType]?: boolean;
};
