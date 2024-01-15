import Image from 'next/image'
import Link from 'next/link'
import { grassMotionSet } from '@/constants/globaIIcon'
import { icons } from './data'
import LogoImg from '../Logo/LogoImg'
import ScrollPageTop from '../ScrollPageTop'
import GlobalLink from '../GlobalLink'

const Footer = () => {
  const { grassMotionLeft, grassMotionRight } = grassMotionSet
  return (
    <footer className="pt-41">
      <ul className="flex gap-154 items-end">
        <li>
          <Image src={grassMotionLeft.src} alt={grassMotionLeft.alt} width={489} height={136} className=" self-end" />
        </li>
        <li className="text-primary-green flex flex-col items-center mb-40">
          <LogoImg widthProps={32} heightProps={32} classProps="mb-8" />
          <h3>搶鮮購</h3>
          <p className=" text-14 py-8">devqna@contact.com</p>
          <ul className="flex gap-16">
            {icons.map((icon) => (
              <li key={icon.alt}>
                <GlobalLink href={icon.path} openInNewTab={true}>
                  <Image src={icon.src} alt={`Follow us on ${icon.alt}`} width={40} height={40} className=" hover:opacity-80" />
                </GlobalLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Image src={grassMotionRight.src} alt={grassMotionRight.alt} width={489} height={136} />
        </li>
      </ul>
      <p className=" bg-lightWhite text-center py-24">© SunLive - 線上直播當季農產品</p>
      <ScrollPageTop />
    </footer>
  )
}

export default Footer
