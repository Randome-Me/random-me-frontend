import Glass from "components/common/Glass"
import LoginForm from "components/pages/login/LoginForm"
import LoginSocialMedia from "components/pages/login/LoginSocialMedia"
import ContinueAsGuest from "components/pages/login/ContinueAsGuest"
import PageBackground from "components/common/PageBackground"
import Head from "next/head"

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

      <PageBackground src="/images/bg-login-register.svg">
        <div className="flex min-h-screen justify-center items-center">
          <h1 className="sr-only">Login</h1>
          <Glass className="p-[2rem] space-y-4 md:space-y-10 xs:p-10 sm:p-14">
            <strong
              className="text-black text-4xl sm:text-5xl font-extrabold
            flex justify-center"
            >
              Random Me.
            </strong>
            <LoginForm />
            <LoginSocialMedia />
            <ContinueAsGuest />
          </Glass>
        </div>
      </PageBackground>
    </>
  )
}
