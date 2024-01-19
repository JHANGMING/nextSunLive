import { ReactNode } from 'react';

export type PageCategoryType =
  | 'liveStreamPage'
  | 'productPage'
  | "productDetailPage"
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
