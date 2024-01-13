import { BsSearch } from 'react-icons/bs'
const BannerInput = () => {
  return (
    <div className="relative">
      <input type="text" placeholder="輸入水果、蔬菜" className="w-680 h-48 rounded-12 border pl-16 " />
      <div className="bg-primary-green w-53 h-48 flex justify-center items-center rounded-tr-12 rounded-br-12 absolute top-0 right-0">
        <BsSearch className="text-20  text-white" />
      </div>
    </div>
  )
}

export default BannerInput
