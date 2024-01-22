import Button from '@/common/components/Button';
import DefaultInput from '@/common/components/Input';
import { FormValues } from '@/common/components/Input/data';
import { useGapClass } from '@/common/hooks/useGapClass';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const gapClass = useGapClass(errors);
  const onSubmit = (data: FormValues) => {
    const { email, password, nickname } = data;
    const dataObj = {
      email: email.trim(),
      password: password.trim(),
      nickname: nickname.trim(),
    };
    console.log(dataObj);
  };
  return (
    <>
      <h2 className="text-center">電子郵件註冊</h2>
      <form
        className={`flex flex-col ${gapClass}`}
        onSubmit={handleSubmit(onSubmit)}>
        <DefaultInput
          type="text"
          labelText="暱稱"
          inputText="請輸入暱稱"
          icon="*"
          id="nickname"
          errors={errors}
          register={register}
          rules={{
            required: {
              value: true,
              message: '請輸入您的暱稱!',
            },
          }}
        />
        <DefaultInput
          type="email"
          labelText="電子郵件"
          inputText="請輸入電子郵件"
          icon="*"
          id="email"
          errors={errors}
          register={register}
          rules={{
            required: 'Email 為必填',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email 格式不正確',
            },
          }}
        />
        <DefaultInput
          type="password"
          labelText="密碼"
          inputText="請輸入密碼"
          icon="*"
          id="password"
          errors={errors}
          register={register}
          rules={{
            required: {
              value: true,
              message: '請輸入密碼!',
            },
            minLength: {
              value: 6,
              message: '密碼長度至少6位字元',
            },
          }}
        />
        <DefaultInput
          type="password"
          labelText="確認密碼"
          inputText="請輸入密碼"
          icon="*"
          id="confirmPassword"
          errors={errors}
          register={register}
          rules={{
            required: {
              value: true,
              message: '請輸入密碼!',
            },
            minLength: {
              value: 6,
              message: '密碼長度至少6位字元',
            },
            validate: (val) => {
              if (watch('password') !== val) {
                return '密碼沒有一致喔！！';
              }
            },
          }}
        />
        <Button
          type="submit"
          category="auth"
          btnStyle="mt-16 bg-primary-yellow text-black">
          立即註冊
        </Button>
      </form>
      <div className=" self-center text-center">
        <p className="mb-16">
          已經成為會員 ?
          <Link
            href="/auth/login"
            className=" cursor-pointer text-primary-green font-bold">
            立即登入 !
          </Link>
        </p>
        <p>註冊表示同意使用者條款 & 隱私權保護政策</p>
      </div>
    </>
  );
};

export default RegisterPage;
