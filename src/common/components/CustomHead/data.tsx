import { PageCategoryType } from "@/common/Layout/data"


type dataType = {
  title: string
  desc: string
  url: string
  image: string
}

export const defaultMeta: Record<string, string> = {
  defaultTitle: 'SunLive | 搶鮮購',
  defaultDescription: '我们提供最新鲜的農產品直播銷售服務，确保質量和時效。',
  defaultImage: '',
}

export const dataSet: Record<string, dataType> = {
  landingPage: {
    title: '',
    desc: '',
    url: '', //canonial
    image: '',
  },
  authPage: {
    title: '會員中心',
    desc: '加入搶鮮購，讓你購安心',
    url: '',
    image: '',
  },
  registerPage: {
    title: '會員註冊',
    desc: '加入搶鮮購，讓你購安心',
    url: '',
    image: '',
  },
  liveStreamPage: {
    title: '直播',
    desc: '管理會員資料',
    url: '',
    image: '',
  },
  productPage: {
    title: '搶鮮購',
    desc: '創建新的揪團，開啟專屬於你的開團體驗',
    url: '',
    image: '',
  },

  error: {
    title: '',
    desc: '',
    url: '',
    image: '',
  },
}

export type CustomHeadProps = {
  pageCategory: PageCategoryType
}
