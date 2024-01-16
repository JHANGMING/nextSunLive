import { BsHandIndex } from 'react-icons/bs';
import { ButtonPropsType } from './data';
const AuthButton = ({
  type,
  onClick,
  children,
  classStyle,
}: ButtonPropsType) => {
  return (
    <button
      type={type}
      className={` flex justify-center gap-8 py-12 rounded-8 border-dashed border border-white cursor-pointer ${classStyle}`}
      onClick={onClick}>
      <BsHandIndex className="w-24 h-24 rotate-90 text-primary-yellow" />
      <p className=" text-white font-bold">{children}</p>
    </button>
  );
};

export default AuthButton;
