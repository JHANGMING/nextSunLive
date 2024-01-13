import Image from "next/image";
type LogoImgPrors = {
  widthProps: number
  heightProps: number
  classProps?:string
}
const LogoImg = ({ widthProps, heightProps, classProps }: LogoImgPrors) => {
  const classStyle = !!classProps?`${classProps}`:""
  return <Image src="/images/logo.png" alt="Logo" width={widthProps} height={heightProps} className={classStyle}></Image>
}
 
export default LogoImg;