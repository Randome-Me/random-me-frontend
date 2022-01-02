import { AvailableLanguages } from "types/internationalization"
import { RandomPolicy } from "types/mab"
import axiosClientInstance from "../instance/client"

export const selectTopicDB = (topicId: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/topics/select`, {
    topicId,
  })
}

export const changeTopicPolicyDB = (topicId: string, policy: RandomPolicy) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/topics/policy`, {
    topicId,
    policy,
  })
}

/**
 * Pull in the context of Multi-armed bandit
 */
export const pullDB = (optionId: string, reward: 0 | 1) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/options/pull`, {
    optionId,
    reward,
  })
}

export const setOptionBiasDB = (optionId: string, bias: number) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/options/bias`, {
    optionId,
    bias,
  })
}

export const setTopicNameDB = (topicId: string, name: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/topics/name`, {
    topicId,
    name,
  })
}

export const setOptionNameDB = (optionId: string, name: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/options/name`, {
    optionId,
    name,
  })
}

export const removeOptionDB = (optionId: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/options/remove`, {
    optionId,
  })
}

/**
 * Remove the topic along with its options
 */
export const removeTopicDB = (topicId: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/topics/remove`, {
    topicId,
  })
}

export const addTopicDB = (name: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/topics/add`, {
    name,
  })
}

export const addOptionDB = (topicId: string, name: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/options/add`, {
    topicId,
    name,
  })
}

export const changeLanguageDB = (language: AvailableLanguages) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/language`, {
    language,
  })
}
