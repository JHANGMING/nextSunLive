import Image from 'next/image'
import { globalIconSet } from '@/constants/globaIIcon'
import { dataSet } from './data'

const FriendlyFarmSection = () => {
  return (
    <section className=" bg-friendlyFarmBG pt-112 pb-41">
      <div className="container">
        <div className="flex gap-16 justify-center items-center ">
          <h2 className="text-40 text-primary-green">{dataSet.title}</h2>
          <Image {...globalIconSet.logoImage} width={50} height={50} className="h-50" />
        </div>
        <div className="grid grid-cols-12 gap-24 ">
          <ul className=" col-start-2 col-end-9">
            {dataSet.content.map((data) => {
              const { subTitle, desFirst, desSecond, image } = data
              return (
                <li className="mb-48" key={subTitle}>
                  <div className="flex gap-24 mb-16">
                    <Image {...image} width={30} height={30} className="-ml-54" />
                    <h3 className="text-20 text-primary-green">{subTitle}</h3>
                  </div>
                  <p>
                    {desFirst}
                    <br />
                    {desSecond}
                  </p>
                </li>
              )
            })}
          </ul>
          <div className="col-start-9 col-end-13">
            <Image {...dataSet.image} width={411} height={308} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FriendlyFarmSection
