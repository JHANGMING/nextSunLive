import Button from '@/common/components/Button'
import DefaultInput from '@/common/components/Input'
import Link from 'next/link'
const PasswordlessLoginPage = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <form className="flex flex-col gap-16">
        <h2 className="mb-40 text-center">會員登入</h2>
        <DefaultInput type="email" labelText="信箱" inputText="請輸入電子郵件" icon="*" id="email" />
        <Button type="submit" category="auth" classStyle="mb-60 bg-primary-green">
          發送驗證信至信箱
        </Button>
      </form>
      <p className="flex justify-center">
        還未成為會員 ?
        <Link href="/auth/register" className=" cursor-pointer text-primary-green font-bold">
          立即註冊 !
        </Link>
      </p>
    </div>
  )
}

export default PasswordlessLoginPage
