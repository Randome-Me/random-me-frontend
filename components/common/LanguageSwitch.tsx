import { useAppDispatch, useAppSelector } from "hooks"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "store/slice/user"
import { AvailableLanguages } from "types/internationalization"
import { changeLanguageDB } from "utils/axios/request/database"
import { guestUserId } from "utils/constants"

const languages: AvailableLanguages[] = ["en", "th"]

const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { _id: userId } = useAppSelector((state) => state.user)

  const handleChangeLanguage = async (language: AvailableLanguages) => {
    if (
      userId !== guestUserId &&
      router.pathname !== "/login" &&
      router.pathname !== "/register"
    ) {
      await changeLanguageDB(language)
    }
    dispatch(changeLanguage({ language }))
    i18n.changeLanguage(language)
  }

  return (
    <div
      className="
    inline-block
    bg-slate-50/50
    rounded
    "
    >
      {languages.map((language) => (
        <button
          key={language}
          className={`
        inline-flex
        items-center
        justify-center
        p-2
        text-sm
        rounded
        hover:text-slate-50
        font-extrabold
        font-Kanit
        hover:bg-gray-700
        focus:outline-none
        focus:shadow-outline
        ${language === i18n.language ? "bg-yellow-300" : "opacity-75"}
        `}
          onClick={() => handleChangeLanguage(language)}
        >
          {{ en: "EN", th: "ไทย" }[language]}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
