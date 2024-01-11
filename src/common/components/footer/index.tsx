import { globalIcon } from "@/constants/globaIIcon";
import Image from "next/image";
import { icons } from "./data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-41">
      <ul className="flex gap-154 items-end">
        <li>
          <Image src="/images/grassMotionLeft.png" alt="grassMotionLeft" width={489} height={136} className=" self-end" />
        </li>
        <li className="text-primary-green flex flex-col items-center mb-40">
          <Image {...globalIcon.logo} width={32} height={32} className="mb-8" />
          <h3>搶先購</h3>
          <p className=" text-14 py-8">devqna@contact.com</p>
          <ul className="flex gap-16">
            {icons.map((icon) => (
              <li key={icon.alt}>
                <Link href={icon.path}>
                  <Image {...icon} width={40} height={40} className=" hover:opacity-80" />
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Image src="/images/grassMotionRight.png" alt="grassMotionRight" width={489} height={136} />
        </li>
      </ul>
      <p className=" bg-lightWhite text-center py-24">© SunLive - 線上直播當季農產品</p>
    </footer>
  )
}
 
export default Footer;