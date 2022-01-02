import { Icon } from "@iconify/react"
import { useTranslation, withTranslation } from "react-i18next"

const LoginSocialMedia = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })

  const loginWithGoogle = () => {
    // TODO: login with google
  }

  const loginWithFacebook = () => {
    // TODO: login with facebook
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <span className="mb-1">{t("orLoginWith")}</span>
      <div className="flex space-x-2">
        <h2 className="sr-only">{t("srOnlyWithGoogle")}</h2>
        <a href="#">
          <Icon
            className="cursor-pointer w-9 h-9"
            icon="flat-color-icons:google"
            onClick={loginWithGoogle}
          />
        </a>
        <h2 className="sr-only">{t("srOnlyWithFacebook")}</h2>
        <a href="#">
          <Icon
            className="cursor-pointer text-[#4267b2] w-8 h-8"
            icon="akar-icons:facebook-fill"
            onClick={loginWithFacebook}
          />
        </a>
      </div>
    </div>
  )
}

export default withTranslation()(LoginSocialMedia)
