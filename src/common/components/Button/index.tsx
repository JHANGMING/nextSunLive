import AddToCartButton from './AddToCartButton'
import AuthButton from './AuthButton'
import { ButtonPropsType } from './data'

const Button = ({ category, path, onClick, children, classStyle }: ButtonPropsType) => {
  if (category === 'addCart') {
    return <AddToCartButton onClick={onClick}>{children}</AddToCartButton>
  }
  if (category === 'auth') {
    return (
      <AuthButton onClick={onClick} classStyle={classStyle}>
        {children}
      </AuthButton>
    )
  }
  return null
}

export default Button
