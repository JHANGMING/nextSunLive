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
};
