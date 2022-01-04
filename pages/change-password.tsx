import { LoginInputPassword } from "components/common/LoginInput"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import Head from "next/head"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const ChangePassword = ({ query: { token } }) => {
  const { t } = useTranslation("translation", { keyPrefix: "changePassword" })
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password.trim() === "") {
      alert(t("emptyPasswordAlert"))
      return
    }
    if (confirmPassword.trim() === "") {
      alert(t("emptyPasswordConfirmAlert"))
      return
    }
    if (password !== confirmPassword) {
      alert(t("passwordConfirmAlert"))
      return
    }

    // TODO: extract query params and call change password api
  }

  const goToLogin = () => {
    router.replace("/login")
  }

  useEffect(() => {
    if (!token) {
      alert(t("noTokenAlert"))
      goToLogin()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <LoginRegisterLayout topic="Change Password">
        <form
          onSubmit={handleSubmit}
          className="
        space-y-4
          "
        >
          <LoginInputPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("passwordExamplePlaceholder")}
          />
          <LoginInputPassword
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t("passwordConfirmExamplePlaceholder")}
          />
          <button
            type="submit"
            className="
        login-register-button
        uppercase
        "
          >
            {t("changePassword")}
          </button>
        </form>
        <span onClick={goToLogin} className="clickable-text-cyan text-sm">
          {t("login")}
        </span>
      </LoginRegisterLayout>
    </>
  )
}

ChangePassword.getInitialProps = ({ query }) => {
  return { query }
}

export default ChangePassword
