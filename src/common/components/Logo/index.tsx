import Link from "next/link";
import LogoImg from "./LogoImg";
import { classStyleProps } from "./data";

const Logo = ({ classStyle }: classStyleProps) => {
  return (
    <Link href="/" className={`flex items-center gap-16 group ${classStyle}`}>
      <LogoImg widthProps={50} heightProps={50} classProps="group-shake" />
      <p className="text-28 font-bold text-primary-green">搶鮮購</p>
    </Link>
  )
}
 
export default Logo;