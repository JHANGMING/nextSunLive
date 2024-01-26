
import { useForm } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';
import PersonInput from '@/common/components/Input/PersonInput';
import Button from '@/common/components/Button';
const AccountSetting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    // const { email, password, identity } = data;
    // const dataObj = {
    //   email: email.trim(),
    //   password: password.trim(),
    //   identity,
    // };
    console.log(data);
  };
  return (
    <>
      <h3 className=" text-20 font-semibold mb-32">帳號設定</h3>
      <form className="flex flex-col gap-24" onSubmit={handleSubmit(onSubmit)}>
        <PersonInput
          type="email"
          labelText="電子郵件"
          inputText="XXX@gmil.com"
          inputStyle="text-14"
          id="email"
          isdisabled={true}
        />
        <div className="flex gap-24">
          <PersonInput
            type="text"
            labelText="暱稱"
            inputText="請輸入暱稱"
            inputStyle="text-18 w-full"
            id="nickName"
            register={register}
          />
          <PersonInput
            type="tel"
            labelText="聯絡電話"
            inputText="請輸入聯絡電話"
            inputStyle="text-18"
            id="userPhone"
            errors={errors}
            register={register}
            rules={{
              pattern: {
                value: /^\d+$/,
                message: '請輸入有效的數字',
              },
              maxLength: {
                value: 10,
                message: '聯絡電話不能超過10位數',
              },
            }}
          />
        </div>
        <Button category="submit" classStyle="self-end hover:opacity-70">
          儲存
        </Button>
      </form>
    </>
  );
};

export default AccountSetting;
