import { ReactNode } from 'react';
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
export type FormValues = {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}
export type DefaultInputProps = {
  type: 'email' | 'text' | 'password';
  labelText: string;
  inputText: string;
  icon?: ReactNode;
  id: keyof FormValues;
  register?: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  rules: RegisterOptions;
};
