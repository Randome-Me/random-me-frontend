import {
  LoginInputText,
  LoginInputPassword,
} from "components/common/LoginInput"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { useTranslation, withTranslation } from "react-i18next"

const LoginForm = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username.trim() === "") {
      alert(t("emptyUsernameAlert"))
      return
    }
    if (password.trim() === "") {
      alert(t("emptyPasswordAlert"))
      return
    }

    // TODO: go to home page
    setUsername("")
    setPassword("")
  }

  const handleForgotPassword = () => {
    // TODO: handle forgot password
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h2 className="sr-only">Login with username and password</h2>
      <div className="space-y-4">
        <LoginInputText
          value={username}
          placeholder={t("username")}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInputPassword
          value={password}
          placeholder={t("password")}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <button type="submit" className="login-register-button uppercase">
          {t("login")}
        </button>
        <div className="flex justify-between">
          <Link href="/register">
            <a className="clickable-text-cyan text-sm">{t("register")}</a>
          </Link>
          <a
            onClick={handleForgotPassword}
            href="#"
            className="clickable-text-cyan text-sm"
          >
            {t("forgotPassword")}
          </a>
        </div>
      </div>
    </form>
  )
}

export default withTranslation()(LoginForm)
