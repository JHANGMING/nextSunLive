
import Link from 'next/link'
import { logoData, navBarDatas } from './data'
import LogoImg from '@/common/components/LogoImg'


const NavBar = () => {
  return (
    <ul className="flex w-824 items-center justify-between">
      <li>
        <Link href="/" className="flex items-center gap-16 group">
          <LogoImg widthProps={50} heightProps={50} classProps="group-shake" />
          <p className="text-28 font-bold leading-normal text-primary-green">{logoData.title}</p>
        </Link>
      </li>
      {navBarDatas.map((data) => {
        const { src, title, subTitle } = data
        return (
          <li key={subTitle} className="text-center text-20 w-[20%]">
            <Link href={src} className="relative hover-trigger">
              <p className="mb-1">{title}</p>
              <span>{subTitle}</span>
              <div className="absolute top-0 left-16 w-60 h-60 rounded-full bg-primary-yellow opacity-0 hover-target -z-10"></div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavBar
