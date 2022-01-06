import Head from "next/head"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import ContinueAsGuest from "components/pages/login/ContinueAsGuest"
import LoginForm from "components/pages/login/LoginForm"
import { useTranslation, withTranslation } from "react-i18next"
import { useEffect } from "react"
import { getPageTitle, onPageMount } from "utils"

const Login = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })

  useEffect(() => {
    onPageMount()
  }, [])

  return (
    <>
      <Head>
        <title>{getPageTitle("login.title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={getPageTitle("login.title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <LoginRegisterLayout topic={t("title")}>
        <LoginForm />
        <ContinueAsGuest />
      </LoginRegisterLayout>
    </>
  )
}

export default withTranslation()(Login)
