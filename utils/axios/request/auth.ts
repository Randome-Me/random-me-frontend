import i18n from "locales"
import { AvailableLanguages } from "types/internationalization"
import { Topic, User } from "types"
import axiosClientInstance from "../instance/client"

export const checkMe = () => {
  type ResponseData = User
  return axiosClientInstance.get<ResponseData>("auth/me")
}

export interface LoginPayload {
  username: string
  password: string
  language: AvailableLanguages
}

export const login = (username: string, password: string) => {
  type ResponseData = User
  const payload: LoginPayload = {
    username,
    password,
    language: i18n.language as AvailableLanguages,
  }
  return axiosClientInstance.post<ResponseData>("auth/login", payload)
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
  return axiosClientInstance.post<ResponseData>("auth/register", {
    email,
    username,
    password,
    confirmPassword,
    language,
  })
}

/**
 * Register a new user with existing guest information
 * @returns The new user id
 */
export const registerWithCurrentGuest = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  language: AvailableLanguages,
  selectedTopicId: string,
  topics: Topic[]
) => {
  type ResponseData = { _id: string }
  return axiosClientInstance.post<ResponseData>("auth/register/guest", {
    username,
    email,
    password,
    confirmPassword,
    language,
    selectedTopicId,
    topics,
  })
}

export const forgotPassword = (email: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>(`/accounts/forgot-password`, {
    email,
  })
}

export interface ResetPasswordBody {
  token: string
  password: string
  confirmPassword: string
  language: AvailableLanguages
}

export const resetPassword = ({
  token,
  password,
  confirmPassword,
  language,
}: ResetPasswordBody) => {
  interface ResponseData {}
  const payload: ResetPasswordBody = {
    token,
    password,
    confirmPassword,
    language,
  }
  return axiosClientInstance.post<ResponseData>(
    "/accounts/reset-password",
    payload
  )
}
