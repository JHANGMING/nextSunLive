import Button from '@/common/components/Button'
import DefaultInput from '@/common/components/Input'
import Link from 'next/link'
const Register = () => {
  return (
  <>
  <h2 className="mb-60 text-center px-[328px]">電子郵件註冊</h2>
        <form className="px-165 flex flex-col gap-24">
          <DefaultInput type="text" labelText="帳號" inputText="請輸入帳號" icon="*" id="account" />
          <DefaultInput type="email" labelText="電子郵件" inputText="請輸入電子郵件" icon="*" id="email" />
          <DefaultInput type="password" labelText="密碼" inputText="請輸入密碼" icon="*" id="password" />
          <DefaultInput type="text" labelText="暱稱" inputText="請輸入暱稱" icon="*" id="nickname" />
          <Button category="auth" classStyle="mt-16 mb-60">
            立即註冊
          </Button>
        </form>
        <div className=" self-center text-center">
          <p className="mb-16">
            已經成為會員 ?
            <Link href="/auth/login" className=" cursor-pointer text-primary-green font-bold">
              立即登入 !
            </Link>
          </p>
          <p>註冊表示同意使用者條款 & 隱私權保護政策</p>
        </div>
  </>
    
  )
}

export default Register
