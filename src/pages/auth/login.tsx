import Layout from '@/common/Layout'
import LoginPage from '@/modules/Auth/LoginPage'

const Login = () => {
  return (
    <Layout pageCategory="authPage">
      <section className=" bg-authBG pt-180 pb-62 flex justify-center bg-no-repeat ">
        <div className="bg-white rounded-20 flex flex-col py-40">
          <LoginPage />
        </div>
      </section>
    </Layout>
  )
}

export default Login
