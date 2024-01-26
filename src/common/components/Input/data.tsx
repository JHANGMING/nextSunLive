import { ReactNode } from 'react';
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
export type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  userPhone: string;
  address: string;
  identity: string;
  nickName: string;
};
export type DefaultInputProps = {
  type: 'email' | 'text' | 'password' | 'tel';
  labelText: string;
  inputText: string;
  icon?: ReactNode;
  id: keyof FormValues;
  register?: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  rules: RegisterOptions;
  page?: string;
  globalStyle?: string;
  isdisabled?:boolean
};

export type PersonInputProps = {
  type: 'email' | 'text' | 'password' | 'tel';
  labelText: string;
  inputText: string;
  inputStyle: string;
  id: keyof FormValues;
  register?: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  rules?: RegisterOptions;
  isdisabled?: boolean;
};
