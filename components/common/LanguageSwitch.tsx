import { FC } from "react"
import { useTranslation } from "react-i18next"
import { loggedInUserDo, switchLanguage } from "utils"
import { changeLanguageDB } from "utils/axios/request/database"
import { languages } from "utils/constants"

interface LanguageSwitchProps {
  className?: string
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({ className }) => {
  const { i18n } = useTranslation()

  const handleSwitchLanguage = async () => {
    const language = switchLanguage()
    loggedInUserDo(() => changeLanguageDB(language))
  }

  return (
    <div
      onClick={handleSwitchLanguage}
      className={`
    inline-block
    bg-slate-50/50
    rounded
    ${className}
    `}
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
        ${
          language === i18n.language
            ? "bg-yellow-300 dark:text-slate-800 dark:hover:text-yellow-400"
            : "opacity-75 "
        }
        `}
        >
          {{ en: "EN", th: "ไทย" }[language]}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
