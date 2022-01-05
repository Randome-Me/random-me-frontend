import { AvailableLanguages } from "./internationalization"
import { RandomPolicy, BanditArm } from "./mab"

export type LocalStorageKey = "user" | "theme"

export interface Topic {
  _id: string
  name: string
  policy: RandomPolicy
  t: number
  options: BanditArm[]
}

export interface User {
  _id: string
  language: AvailableLanguages
  username: string
  selectedTopicId: string | null // the current selected topic
  topics: Topic[]
  email: string | null
  // maybe user-specific random policy configs here if they're configurable?
}
