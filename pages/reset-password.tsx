import { LoginInputPassword } from "components/common/LoginInput"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import Head from "next/head"
import { useRouter } from "next/router"
import { FC, FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { GetServerSideProps } from "next"
import { useAppDispatch } from "hooks"
import { hideLoader, showLoader } from "store/slice/app"
import { resetPassword } from "utils/axios/request/auth"
import i18n from "locales"
import { AvailableLanguages } from "types/internationalization"

export const getServerSideProps: GetServerSideProps = async ({
  query: { token },
}) => {
  if (token) {
    return {
      props: { token },
    }
  }

  return {
    redirect: {
      destination: "/login",
    },
    props: {},
  }
}

const ResetPassword: FC<{ token: string }> = ({ token }) => {
  const { t } = useTranslation("translation", { keyPrefix: "changePassword" })
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const goToLogin = async () => {
    await router.replace("/login")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    dispatch(showLoader())
    try {
      const {
        data: { message },
      } = await resetPassword({
        token,
        newPassword: password,
        language: i18n.language as AvailableLanguages,
      })
      alert(message)
    } catch (err) {
      alert(err.response.data.message)
    }
    dispatch(hideLoader())
    await goToLogin()
  }

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <LoginRegisterLayout topic={t("title")}>
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

export default ResetPassword
