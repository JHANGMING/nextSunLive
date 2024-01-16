import LogoImg from "@/common/components/Logo/LogoImg";

const CategoryTitle = () => {
  return (
    <div className="flex gap-10 p-16 h-74">
      <LogoImg widthProps={32} heightProps={32} />
      <h3 className="ellipse">
        最新消息
      </h3>
    </div>
  );
}
 
export default CategoryTitle;