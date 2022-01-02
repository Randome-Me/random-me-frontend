import { useAppDispatch } from "hooks"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "store/slice/user"
import { AvailableLanguages } from "types/internationalization"

const languages: AvailableLanguages[] = ["en", "th"]

const LanguageSwitch = () => {
  const { i18n } = useTranslation()
  const dispatch = useAppDispatch()

  const handleChangeLanguage = (language: AvailableLanguages) => {
    // TODO change language in database
    dispatch(changeLanguage({ language }))
    i18n.changeLanguage(language)
  }

  return (
    <div
      className="
    inline-block
    bg-slate-50
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
        font-Sen
        hover:bg-gray-700
        focus:outline-none
        focus:shadow-outline
        ${language === i18n.language ? "bg-yellow-400" : "opacity-75"}
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
