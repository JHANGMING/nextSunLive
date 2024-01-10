import Image from 'next/image'
import Link from 'next/link'
import { logoData, navBarDatas } from './data'

const NavBar = () => {
  return (
    <ul className="flex w-824 items-center justify-between">
      <li>
        <Link href="/" className="flex items-center gap-16">
          <Image {...logoData.image} />
          <p className="text-28 font-bold leading-normal text-primary-green">
            {logoData.title}
            <span className=' text-primary-red'>{logoData.subTitle}</span>
          </p>
        </Link>
      </li>
      {navBarDatas.map((data) => {
        const { src, title, subTitle } = data
        return (
          <li key={subTitle} className="text-center text-20 w-[20%]">
            <Link href={src}>
              <p className="mb-1">{title}</p>
              <span>{subTitle}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavBar
