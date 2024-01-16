import Image from "next/image";
import CategoryTitle from "./CategoryTitle";

const NewsUpdatesSection = () => {
  return (
    <section className="bg-white py-60">
      <div className="container">
        <CategoryTitle />
        <div className="flex gap-24">
          <div className="overflow-hidden w-[416px] h-[208px] ">
            <Image
              src="/images/productShop/newsUpdatesImg1.png"
              alt="newsUpdatesImg1"
              width={416}
              height={208}
              layout="responsive"
              className="hover:scale-110 transition-transform duration-1000 ease-in-out"
            />
          </div>
          <Image
            src="/images/productShop/newsUpdatesImg2.png"
            alt="newsUpdatesImg2"
            width={416}
            height={208}
          />
          <Image
            src="/images/productShop/newsUpdatesImg3.png"
            alt="newsUpdatesImg3"
            width={416}
            height={208}
          />
        </div>
      </div>
    </section>
  );
};
 
export default NewsUpdatesSection;