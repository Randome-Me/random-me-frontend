import { LoginInputEmail } from "components/common/LoginInput"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import Head from "next/head"
import Link from "next/link"
import React, { FormEvent } from "react"
import { useTranslation } from "react-i18next"

const ForgotPassword = () => {
  const { t } = useTranslation("translation", { keyPrefix: "forgotPassword" })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <LoginRegisterLayout topic="Login">
        <form onSubmit={handleSubmit}>
          <LoginInputEmail placeholder="Email" />
          <button
            type="submit"
            className="
            login-register-button
            uppercase
            "
          >
            {t("send")}
          </button>
        </form>
        <Link href="/login">
          <a className="clickable-text-cyan text-sm">{t("login")}</a>
        </Link>
      </LoginRegisterLayout>
    </>
  )
}

export default ForgotPassword
