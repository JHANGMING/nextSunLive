const DefaultInput = ({ type, labelText,inputText, icon,id }) => {
  return (
    <div>
      <label htmlFor={id} className=" text-20 font-bold block mb-8">
        {labelText} <span className=" text-primary-red">{icon}</span>
      </label>
      <input type={type} placeholder={inputText} id={id} className="w-full border border-lightGray rounded-8 py-12 pl-12 text-black"/>
    </div>
  )
}
 
export default DefaultInput;