import AddToCartButton from './AddToCartButton'
import AuthButton from './AuthButton'
import { ButtonPropsType } from './data'

const Button = ({ category, path, onClick, children, classStyle,type, ...props }: ButtonPropsType) => {
  switch (category) {
    case 'addCart':
      return (
        <AddToCartButton onClick={onClick} {...props}>
          {children}
        </AddToCartButton>
      )
    case 'auth':
      return (
        <AuthButton type={type} onClick={onClick} classStyle={classStyle} {...props}>
          {children}
        </AuthButton>
      )
    default:
      return null
  }
}

export default Button
