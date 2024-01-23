import DefaultInput from '@/common/components/Input';
import { FormValues } from '@/common/components/Input/data';
import { useForm } from 'react-hook-form';
import { BsChevronRight, BsChevronDown, BsX } from 'react-icons/bs';
import CartList from './CartList';
import { useRef } from 'react';

const CartPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };
  const onSubmit = (data: FormValues) => {
    console.log(data);
    
    //  const { email, password, nickname } = data;
    //  const dataObj = {
    //    email: email.trim(),
    //    password: password.trim(),
    //    nickname: nickname.trim(),
    //  };
    //  console.log(dataObj);
  };
  return (
    <main>
      <section className="container grid grid-cols-12 gap-x-24 py-60">
        <CartList />
        <div className="bg-white col-span-9 p-24 rounded-20 mb-32">
          <div className="flex gap-8 mb-24">
            <BsChevronDown size={24} className=" text-primary-green" />
            <p className=" text-darkGray font-semibold text-20">
              填寫資料與付款
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-24">
            <DefaultInput
              page="cart"
              type="text"
              labelText="收貨人"
              id="userName"
              inputText="請輸入姓名"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入您的姓名!',
                },
              }}
            />
            <DefaultInput
              page="cart"
              type="tel"
              labelText="聯絡電話"
              id="userPhone"
              inputText="請輸入聯絡電話"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入您的聯絡電話!',
                },
              }}
            />
            <DefaultInput
              page="cart"
              type="text"
              labelText="收貨地址"
              id="address"
              inputText="請輸入到貨地址"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入您的到貨地址!',
                },
              }}
            />
          </form>
        </div>
        <div className="bg-white col-span-9 px-24 py-16 rounded-20 flex items-center justify-between">
          <p className="w-[590px]">
            點擊「確認付款」，即表示您已確認訂單無誤且同意右方顯示的總金額，亦同意使用信用卡付款。
          </p>
          <div className=" flex flex-col gap-8 w-[200px] items-center">
            <h5 className=" text-primary-red font-bold">
              <span>$</span>550
            </h5>
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="text-white bg-primary-green rounded-8 py-12 w-full hover:opacity-60">
              確認付款
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
