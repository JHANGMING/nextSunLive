import { AuthLayoutProps } from "./data";

const AuthLayout = ({ children ,classStyle}:AuthLayoutProps) => {
  return (
    <section className="bg-authBG pt-180 pb-62 flex justify-center bg-no-repeat">
      <div className={`bg-white rounded-20 flex flex-col pt-40 w-[856px] h-[816px] ${classStyle}`}>{children}</div>
    </section>
  )
}
 
export default AuthLayout;