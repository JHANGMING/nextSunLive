import Layout from '@/common/Layout'
import Register from '@/modules/Auth/Register'

const RegisterPage = () => {
  return (
    <Layout pageCategory="authPage">
      <section className=" bg-authBG pt-180 pb-62 flex justify-center bg-no-repeat ">
        <div className="bg-white rounded-20 flex flex-col py-40">
          <Register />
        </div>
      </section>
    </Layout>
  )
}

export default RegisterPage
