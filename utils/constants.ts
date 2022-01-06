import { AvailableLanguages } from "types/internationalization"
import { RandomPolicy } from "types/mab"

// must be sorted
export const biasRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export const maxBias = biasRange[biasRange.length - 1]
export const minBias = biasRange[0]

export const nullUserId = "null"
export const guestUserId = "guest"

export const policies: RandomPolicy[] = [
  RandomPolicy.MULTINOMIAL,
  RandomPolicy.EQUAL_WEIGHT,
  RandomPolicy.RANDOMIZE,
  RandomPolicy.UCB,
  RandomPolicy.EPSILON_GREEDY,
  RandomPolicy.SOFTMAX,
]

export const maxLengthTopicAndOptionText = 150

export const languages: AvailableLanguages[] = ["en", "th"]
export const languageOpposites: {
  [key in AvailableLanguages]: AvailableLanguages
} = {
  en: "th",
  th: "en",
}

/**
 * All possible routes within the /pages
 */
export const ROUTES = {
  account: "/account",
  forgotPassword: "/forgot-password",
  home: "/",
  login: "/login",
  randomPolicies: "/random-policies",
  register: "/register",
  resetPassword: "/reset-password",
  topics: "/topics",
}
