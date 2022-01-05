import { Icon } from "@iconify/react"
import { useAppDispatch } from "hooks"
import Link from "next/link"
import { useTranslation, withTranslation } from "react-i18next"
import { setUser } from "store/slice/user"
import { createGuestUser, getLocalUser } from "utils"

const ContinueAsGuest = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login" })
  const dispatch = useAppDispatch()

  const handleContinueAsGuest = () => {
    // check if there exists an existing anonymous user
    let user = getLocalUser()
    if (!user) {
      user = createGuestUser()
    }
    dispatch(setUser(user))
  }

  return (
    <span className="block text-center dark:text-slate-100">
      {t("or") + " "}
      <Link href="/">
        <a onClick={handleContinueAsGuest} className="clickable-text-cyan mr-2">
          {t("continueAsGuest")}
        </a>
      </Link>
    </span>
  )
}

export default withTranslation()(ContinueAsGuest)
