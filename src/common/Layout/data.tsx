import { ReactNode } from 'react';

export type PageCategoryType =
  | 'liveStreamPage'
  | 'liveStreamView'
  | 'productPage'
  | 'productDetailPage'
  | 'landingPage'
  | 'authPage';

export type LayoutPropsType = {
  children?: ReactNode;
  pageCategory: PageCategoryType;
  classStyle?: string;
};

export type AuthLayoutProps = {
  children: ReactNode;
  classStyle: string | undefined;
};

type pageSetType = {
  authPage: boolean;
  productDetailPage: boolean;
  liveStreamPage: boolean;
  productPage: boolean;
  landingPage: boolean;
  liveStreamView: boolean;
};
export const colorWhiteSet: pageSetType = {
  authPage: true,
  productDetailPage: true,
  liveStreamPage: true,
  liveStreamView: true,
  productPage: false,
  landingPage: false,
};

export const footerSet: pageSetType = {
  authPage: true,
  productDetailPage: true,
  liveStreamPage: true,
  liveStreamView: true,
  productPage: true,
  landingPage: false,
};