import { AvailableLanguages } from "types/internationalization"
import { RandomPolicy } from "types/mab"
import axiosClientInstance from "../instance/client"

/**
 * Create a new topic
 */
export const addTopicDB = (name: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`topics`, {
    name,
  })
}

/**
 * Add a new option to a topic
 */
export const addOptionDB = (topicId: string, name: string, bias: number) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`topics/${topicId}`, {
    bias,
    name,
  })
}

export const selectTopicDB = (topicId: string) => {
  interface ResponseData {}
  return axiosClientInstance.put<ResponseData>(`topics/${topicId}`, {
    topicId,
  })
}

export const changeTopicPolicyDB = (topicId: string, policy: RandomPolicy) => {
  interface ResponseData {}
  return axiosClientInstance.patch<ResponseData>(`topics/${topicId}`, {
    field: "policy",
    value: policy,
  })
}

export const setTopicNameDB = (topicId: string, name: string) => {
  interface ResponseData {}
  return axiosClientInstance.patch<ResponseData>(`topics/${topicId}`, {
    field: "name",
    value: name,
  })
}

/**
 * Remove the topic along with its options
 */
export const removeTopicDB = (topicId: string) => {
  interface ResponseData {}
  return axiosClientInstance.delete<ResponseData>(`topics/${topicId}`)
}

/**
 * Pull in the context of Multi-armed bandit
 */
export const pullDB = (topicId: string, optionId: string, reward: 0 | 1) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(
    `topics/${topicId}/${optionId}`,
    {
      reward: Boolean(reward),
    }
  )
}

export const setOptionBiasDB = (
  topicId: string,
  optionId: string,
  bias: number
) => {
  interface ResponseData {}
  return axiosClientInstance.put<ResponseData>(
    `topics/${topicId}/${optionId}`,
    {
      field: "bias",
      value: bias,
    }
  )
}

export const setOptionNameDB = (
  topicId: string,
  optionId: string,
  name: string
) => {
  interface ResponseData {}
  return axiosClientInstance.put<ResponseData>(
    `topics/${topicId}/${optionId}`,
    {
      field: "name",
      value: name,
    }
  )
}

export const removeOptionDB = (topicId: string, optionId: string) => {
  interface ResponseData {}
  return axiosClientInstance.delete<ResponseData>(
    `topics/${topicId}/${optionId}`
  )
}

export const changeLanguageDB = (language: AvailableLanguages) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/language`, {
    language,
  })
}
