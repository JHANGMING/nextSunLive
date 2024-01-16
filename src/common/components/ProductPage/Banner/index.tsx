import BannerInput from "../../Input/BannerInput";

const Banner = () => {
  return (
    <>
      <section className=" bg-shopBannerBG h-459 bg-no-repeat bg-center flex flex-col justify-center items-center">
        <h2 className="text-shadow-bannerTitle text-white mb-16">商品一覽</h2>
        <BannerInput />
      </section>
      <section className=" bg-shopBannerBG_2rd h-[614px] bg-no-repeat bg-center -mt-130 flex justify-center items-end">
        <div className="flex flex-col items-center gap-16 mb-60">
          <p className="text-24 font-bold">
            溫暖的陽光，友善的土地，用心栽培的小農
          </p>
          <h3 className="text-32 text-primary-red">
            專注於提供來自友善農場的天然食材
          </h3>
          <p className="text-24 font-bold">交給我們，您們放心</p>
        </div>
      </section>
    </>
  );
}
 
export default Banner;