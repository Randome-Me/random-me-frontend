import { Icon } from "@iconify/react"
import Link from "next/link"
import { useTranslation, withTranslation } from "react-i18next"

const ContinueAsGuest = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })

  return (
    <span className="block text-center">
      {t("or") + " "}
      <Link href="/">
        <a className="clickable-text-cyan mr-2">{t("continueAsGuest")}</a>
      </Link>
      <a href="#">
        <Icon
          icon="bi:info-circle-fill"
          className="inline clickable-text-cyan"
        />
      </a>
    </span>
  )
}

export default withTranslation()(ContinueAsGuest)
