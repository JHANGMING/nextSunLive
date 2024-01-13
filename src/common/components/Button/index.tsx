
import { ReactNode } from 'react'
import { BsHandIndex } from 'react-icons/bs'
type ButtonPropsType = {
  category: string
  path?: string
  onClick?: () => void
  children?: ReactNode
}
const Button = ({ category,path, onClick, children }: ButtonPropsType) => {
  if (category==="addCart") {
    return (
      <button type="button" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8 border-dashed border border-white cursor-pointer" onClick={onClick}>
        <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
        <p className=" text-white">{children}</p>
      </button>
    )
  }
  return null
}

export default Button;