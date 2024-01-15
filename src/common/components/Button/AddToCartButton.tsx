import { BsHandIndex } from 'react-icons/bs'
import { ButtonPropsType } from './data'
const AddToCartButton = ({ onClick, children }: ButtonPropsType) => {
  return (
    <button type="button" className=" bg-primary-red flex gap-8 py-8 px-16 rounded-8 border-dashed border border-white cursor-pointer" onClick={onClick}>
      <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
      <p className=" text-white">{children}</p>
    </button>
  )
}

export default AddToCartButton
