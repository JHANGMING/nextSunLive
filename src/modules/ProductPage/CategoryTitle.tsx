import LogoImg from "@/common/components/Logo/LogoImg";
type CategoryTitleProps = {
  title:string
};
const CategoryTitle = ({title}) => {
  return (
    <div className="flex gap-10 p-16 h-74">
      <LogoImg widthProps={32} heightProps={32} />
      <h3 className="ellipse">{title}</h3>
    </div>
  );
}
 
export default CategoryTitle;