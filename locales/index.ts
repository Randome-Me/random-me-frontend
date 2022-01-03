import { AvailableLanguages } from "types/internationalization"
import store from "store"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en"
import th from "./th"

const resources = {
  en,
  th,
}

export const defaultLanguage: AvailableLanguages = "en"
export const fallbackLng = "en"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: store?.getState()?.user?.lang || defaultLanguage,
    fallbackLng,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
