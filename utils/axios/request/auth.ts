import { AvailableLanguages } from "types/internationalization"
import { Topic, User } from "types"
import axiosClientInstance from "../instance/client"

export const checkMe = () => {
  type ResponseData = User
  return axiosClientInstance.get<ResponseData>("auth/me")
}

export const login = (username: string, password: string) => {
  type ResponseData = User
  return axiosClientInstance.post<ResponseData>("auth/login", {
    username,
    password,
  })
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
}

export const resetPassword = ({
  token,
  password,
  confirmPassword,
}: ResetPasswordBody) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>("/accounts/reset-password", {
    token,
    password,
    confirmPassword,
  })
}
