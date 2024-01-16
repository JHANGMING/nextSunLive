import { DefaultInputProps } from './data';

const DefaultInput = ({
  type,
  labelText,
  inputText,
  icon,
  id,
  register,
  rules,
  errors,
}: DefaultInputProps) => {
  const inputClassName = `w-full border rounded-8 py-12 pl-12 text-black ${
    errors && id in errors ? 'border-primary-red' : 'border-lightGray'
  }`;
  return (
    <div>
      <label htmlFor={id} className=" text-20 font-bold block mb-8">
        {labelText} <span className=" text-primary-red">{icon}</span>
      </label>
      <input
        type={type}
        placeholder={inputText}
        id={id}
        {...(register && register(id, rules))}
        className={inputClassName}
      />
      {errors && id in errors && (
        <p className=" text-primary-red mt-8">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default DefaultInput;
