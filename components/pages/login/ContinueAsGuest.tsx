import { Icon } from "@iconify/react"
import { useAppDispatch } from "hooks"
import Link from "next/link"
import { useTranslation, withTranslation } from "react-i18next"
import { setUser } from "store/slice/user"
import { createAnonymousUser, getLocalUser } from "utils"

const ContinueAsGuest = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })
  const dispatch = useAppDispatch()

  const handleContinueAsGuest = () => {
    console.log("object")
    // check if there exists an existing anonymous user
    let user = getLocalUser()
    if (!user) {
      user = createAnonymousUser()
      dispatch(setUser(user))
    }
  }

  return (
    <span className="block text-center">
      {t("or") + " "}
      <Link href="/">
        <a onClick={handleContinueAsGuest} className="clickable-text-cyan mr-2">
          {t("continueAsGuest")}
        </a>
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
