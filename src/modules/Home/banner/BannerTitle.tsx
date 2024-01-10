import { BsSearch } from 'react-icons/bs'
const BannerTitle = () => {
  return (
    <div className=" absolute top-1/2 left-1/2 z-10 text-center transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-16">
      <h1 className="text-white flex flex-col text-shadow-bannerTitle">
        對土地保持友善的態度 <span className="text-32 text-white font-bold">為你提供最安心、最放心的農產品</span>
      </h1>
      <div className="relative">
        <input type="text" placeholder="輸入水果、蔬菜" className="w-680 h-48 rounded-12 border pl-16 " />
        <div className="bg-primary-green w-53 h-48 flex justify-center items-center rounded-tr-12 rounded-br-12 absolute top-0 right-0">
          <BsSearch className="text-20  text-white" />
        </div>
      </div>
    </div>
  )
}

export default BannerTitle
