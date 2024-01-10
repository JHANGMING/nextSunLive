import Image from "next/image";
import FarmSwiper from "./farmSwiper";
import FarmFeature from "../farmFeature";


const FriendlyFarm = () => {
  return (
    <section className=" bg-friendlyFarmBG pt-111">
      <div className="container">

      <div className="flex gap-16 justify-center items-center mb-20">
        <h2 className="text-40 text-primary-green">
          歡迎來到 Sun<span className=" text-primary-red">Live</span>
        </h2>
        <Image src="/images/h1_logo.png" alt="friendlyFarmIcon" width={50} height={50} className="h-50" />
      </div>
      <ul className="grid grid-cols-12 gap-24 mb-41">
        <li className=" col-start-2 col-end-9">
          <div className="mb-48">
            <div className="flex gap-24 mb-16">
              <Image src="/images/friendlyFarm/friendlyFarmSubtitleIcon.png" alt="FarmSubtitleIcon" width={30} height={30} className="-ml-54" />
              <h3 className="text-20 text-primary-green">一個友善農業的使者</h3>
            </div>
            <p>
              我們的使命是致力於推廣友善農業，為小農提供強大的支持。我們深信，土地是我們
              <br />
              生存的根本，只有對土地保持友善的態度，才能享受到最優質的農產品。
            </p>
          </div>
          <div className="">
            <div className="flex gap-24 mb-16">
              <Image src="/images/friendlyFarm/friendlyFarmSubtitleIcon.png" alt="FarmSubtitleIcon" width={30} height={30} className="-ml-54" />
              <h3 className="text-20 text-primary-green">讓每一口食物都是滿滿的小農愛心</h3>
            </div>
            <p>
              我們嚴謹把關，以確保你所購買的每一件商品都是經過細心照顧的成果。我們的目標
              <br />
              是為你提供最安心、最放心的農產品，讓每一口食物都是滿滿的小農愛心。
            </p>
          </div>
        </li>
        <li className="col-start-9 col-end-13">
          <Image src="/images/friendlyFarm/friendlyFarmImg.png" alt="friendlyFarmImg" width={411} height={308} />
        </li>
      </ul>
      </div>
      <FarmSwiper />
    </section>
  )
}
 
export default FriendlyFarm;