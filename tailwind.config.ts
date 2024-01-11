import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        lg: '72px',
      },
    },
    screens: {
      sm: '390px',
      lg: '1296px',
    },
    extend: {
      backgroundImage: {
        friendlyFarmBG: 'url(/images/friendlyFarm/friendlyFarmBG.png)',
        farmFeatureBG: 'url(/images/friendlyFarm/farmFeatureBG.png)',
        liveBG: 'url(/images/live/liveBG.png)',
        recommendBG: 'url(/images/recommend/recommendBG.png)',
      },
      borderRadius: {
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        25: '25px',
        50: '50px',
      },
      colors: {
        primary: {
          yellow: '#FEE26B',
          red: '#DE3C2B',
          green: '#47835A',
        },
        mediumGray: '#333333',
        lightGray: '#CCCCCC',
        lightWhite: '#FBF9F3',
      },
      spacing: {
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        27: '27px',
        28: '28px',
        30: '30px',
        32: '32px',
        36: '36px',
        38: '38px',
        40: '40px',
        41: '41px',
        44: '44px',
        46: '46px',
        48: '48px',
        50: '50px',
        53: '53px',
        54: '54px',
        60: '60px',
        66: '66px',
        74: '74px',
        80: '80px',
        90: '90px',
        100: '100px',
        111: '111px',
        114: '114.5px',
        116: '116px',
        118: '118px',
        120: '120px',
        126: '126px',
        130: '130px',
        154: '154px',
        155: '155px',
        276: '276px',
        680: '680px',
        824: '824px',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        40: '40px',
      },
      textShadow: {
        bannerTitle: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      writingMode: {
        vertical: 'vertical-rl',
        verticalLr: 'vertical-lr',
      },
    },
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover'],
    }),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/container-queries'),
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '1440px',
          },
        },
      })
    },
  ],
}
export default config