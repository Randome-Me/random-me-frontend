import { AvailableLanguages } from "./../../../types/internationalization"
import { Topic, User } from "types"
import axiosClientInstance from "../instance/client"

export const checkMe = async () => {
  type ResponseData = User
  const { data } = await axiosClientInstance
    .get<ResponseData>("auth/me")
    .catch<{
      data: null
    }>(() => ({
      data: null,
    }))
  return data
}

export const login = async (username: string, password: string) => {
  type ResponseData = User
  const { data } = await axiosClientInstance
    .post<ResponseData>("auth/login", {
      username,
      password,
    })
    .catch<{
      data: null
    }>(() => ({
      data: null,
    }))
  return data
}

export const logout = () => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>("auth/logout")
}

export const register = async (
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
  language: AvailableLanguages
) => {
  type ResponseData = User
  const { data: user } = await axiosClientInstance.post<ResponseData>(
    "auth/register",
    {
      email,
      username,
      password,
      confirmPassword,
      language,
    }
  )
  return user
}

/**
 * Register a new user with existing guest information
 * @returns The new user id
 */
export const registerWithCurrentGuest = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  language: AvailableLanguages,
  selectedTopicId: string,
  topics: Topic[]
) => {
  type ResponseData = string
  const { data: newUserId } = await axiosClientInstance.post<ResponseData>(
    "auth/register/guest",
    {
      username,
      email,
      password,
      confirmPassword,
      language,
      selectedTopicId,
      topics,
    }
  )
  return newUserId
}

// /**
//  * @param by Tell the server to search by email or username
//  * @param text Email if by is 'email' else username
//  */
// export const forgotPassword = (by: "email" | "username", text: string) => {
//   interface ResponseData {}
//   return axiosClientInstance.post<ResponseData>(
//     `/auth/forgot-password?by=${by}`,
//     {
//       text,
//     }
//   )
// }

// export const resetPassword = (password: string) => {
//   interface ResponseData {}
//   return axiosClientInstance.post<ResponseData>("/auth/reset-password", {
//     password,
//   })
// }
