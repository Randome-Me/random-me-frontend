import Head from "next/head"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import ContinueAsGuest from "components/pages/login/ContinueAsGuest"
import LoginForm from "components/pages/login/LoginForm"
import LoginSocialMedia from "components/pages/login/LoginSocialMedia"

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Random Me</title>
        <meta
          name="description"
          content="Login to Random Me or continue as guest."
        />
      </Head>

      <LoginRegisterLayout topic="Login">
        <LoginForm />
        <LoginSocialMedia />
        <ContinueAsGuest />
      </LoginRegisterLayout>
    </>
  )
}
