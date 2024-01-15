import Button from '@/common/components/Button'
import DefaultInput from '@/common/components/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'
const LoginPage = () => {
  const router = useRouter()
  const handlerToPasswordlessPage = () => {
    router.push('/auth/passwordlessLogin')
  }
  return (
    <>
      <div className="px-55.5">
        <h2 className="mb-60 text-center">會員登入</h2>
        <Button type="button" category="auth" classStyle="mt-16 mb-60 bg-primary-green mb-60 w-full" onClick={handlerToPasswordlessPage}>
          使用無密碼快速登入
        </Button>
      </div>
      <form className="flex flex-col gap-24 pt-60 border-t border-darkGray px-55.5">
        <DefaultInput type="text" labelText="帳號" inputText="請輸入帳號" icon="*" id="account" />
        <DefaultInput type="password" labelText="密碼" inputText="請輸入密碼" icon="*" id="password" />
        <Link href="/auth/resetPassword" className="-mt-16 text-darkGray">
          忘記密碼嗎 ?
        </Link>
        <Button type="submit" category="auth" classStyle="mt-16 mb-80 bg-primary-red">
          立即登入
        </Button>
      </form>

      <p className=" self-center text-center">
        還未成為會員 ?
        <Link href="/auth/register" className=" cursor-pointer text-primary-green font-bold">
          立即註冊 !
        </Link>
      </p>
    </>
  )
}

export default LoginPage
