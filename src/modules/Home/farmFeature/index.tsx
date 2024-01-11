import Image from 'next/image'
import { featureData } from './data'

const FarmFeature = () => {
  return (
    <section className=" bg-farmFeatureBG bg-no-repeat pt-114 pb-130 mb-120">
      <ul className="container grid grid-cols-12 gap-24">
        {featureData.map((data) => {
          const { src, alt, width, height, title, subTitle, descFirst, descSecond } = data
          return (
            <li className=" col-span-4 flex flex-col justify-center items-center" key={title}>
              <div className="flex gap-16 mb-16">
                <Image src="/images/friendlyFarm/featureIconLeft.png" alt="featureIconLeft" width={19.8} height={59.5} />
                <h4 className=" text-primary-red">{title}</h4>
                <Image src="/images/friendlyFarm/featureIconRight.png" alt="featureIconRight" width={19.8} height={59.5} />
              </div>
              <Image src={src} alt={alt} width={width} height={height} className="mb-16 h-276 object-cover" />
              <h5 className=" text-primary-red mb-8">{subTitle}</h5>
              <p>
                {descFirst}
                <br />
                {descSecond}
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FarmFeature
