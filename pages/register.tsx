import {
  LoginInputEmail,
  LoginInputPassword,
  LoginInputText,
} from "components/common/LoginInput"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import Head from "next/head"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Register() {
  const { t } = useTranslation("translation", { keyPrefix: "register" })

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (username.trim() === "") {
      alert(t("emptyUsernameAlert"))
      return
    }
    if (email.trim() === "") {
      alert(t("emptyEmailAlert"))
      return
    }
    if (password.trim() === "") {
      alert(t("emptyPasswordAlert"))
      return
    }
    if (passwordConfirm.trim() === "") {
      alert(t("emptyPasswordConfirmAlert"))
      return
    }
    if (password !== passwordConfirm) {
      alert(t("passwordConfirmAlert"))
      return
    }

    console.log({ username, email, password, passwordConfirm })
  }

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
      </Head>

      <LoginRegisterLayout topic="Register">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <LoginInputText
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder={t("usernameExamplePlaceholder")}
          />
          <LoginInputEmail
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={t("emailExamplePlaceholder")}
          />
          <LoginInputPassword
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder={t("passwordExamplePlaceholder")}
          />
          <LoginInputPassword
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            placeholder={t("passwordConfirmExamplePlaceholder")}
          />

          <div className="space-y-1">
            <button type="submit" className="login-register-button">
              REGISTER
            </button>
            <div className="flex justify-between">
              <Link href="/login">
                <a className="clickable-text-cyan text-sm">Back to login</a>
              </Link>
            </div>
          </div>
        </form>
      </LoginRegisterLayout>
    </>
  )
}
