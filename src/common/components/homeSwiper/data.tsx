type ImageData = {
  src: string
  alt: string
}
export type SwiperData = {
  spaceBetween: number;
  imgDatas: ImageData[];
}

export const swiperData: { [key: string]: SwiperData } = {
  farmDatas: {
    spaceBetween: 8,
    imgDatas: [
      {
        src: '/images/friendlyFarm/farmImg0.png',
        alt: 'farmImg0.png',
      },
      {
        src: '/images/friendlyFarm/farmImg1.png',
        alt: 'farmImg1.png',
      },
      {
        src: '/images/friendlyFarm/farmImg2.png',
        alt: 'farmImg2.png',
      },
      {
        src: '/images/friendlyFarm/farmImg3.png',
        alt: 'farmImg3.png',
      },
      {
        src: '/images/friendlyFarm/farmImg4.png',
        alt: 'farmImg4.png',
      },
      {
        src: '/images/friendlyFarm/farmImg5.png',
        alt: 'farmImg5.png',
      },
    ],
  },
  farmerDatas: {
    spaceBetween: 0,
    imgDatas: [
      {
        src: '/images/farmer/farmer1.png',
        alt: 'farmer1.png',
      },
      {
        src: '/images/farmer/farmer2.png',
        alt: 'farmer2.png',
      },
      {
        src: '/images/farmer/farmer3.png',
        alt: 'farmer3.png',
      },
      {
        src: '/images/farmer/farmer4.png',
        alt: 'farmer4.png',
      },
      {
        src: '/images/farmer/farmer5.png',
        alt: 'farmer5.png',
      },
      {
        src: '/images/farmer/farmer6.png',
        alt: 'farmer6.png',
      },
      {
        src: '/images/farmer/farmer7.png',
        alt: 'farmer7.png',
      },
    ],
  },
}
