import Head from "next/head"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import ContinueAsGuest from "components/pages/login/ContinueAsGuest"
import LoginForm from "components/pages/login/LoginForm"
// import LoginSocialMedia from "components/pages/login/LoginSocialMedia"
import { useTranslation, withTranslation } from "react-i18next"

const Login = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />{" "}
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <LoginRegisterLayout topic="Login">
        <LoginForm />
        {/* <LoginSocialMedia /> */}
        <ContinueAsGuest />
      </LoginRegisterLayout>
    </>
  )
}

export default withTranslation()(Login)
