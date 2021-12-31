import axiosClientInstance from "./client-instance"

export const checkMe = (cookie: string) => {
  interface ResponseData {}
  return axiosClientInstance.get<ResponseData>("/auth/me", {
    headers: {
      cookie,
    },
  })
}

export const login = (email: string, password: string) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>("/auth/login", {
    email,
    password,
  })
}

export const logout = () => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>("/auth/logout")
}

export const register = (
  email: string,
  password: string,
  confirmPassword: string
) => {
  interface ResponseData {}
  return axiosClientInstance.post<ResponseData>("/auth/register", {
    email,
    password,
    confirmPassword,
  })
}

// export const forgotPassword = (by: "email" | "username") => {
//   interface ResponseData {}
//   return axiosInstance.post<ResponseData>(`/auth/forgot-password?by=${by}`, {
//     by,
//   })
// }

// export const resetPassword = (password: string) => {
//   interface ResponseData {}
//   return axiosInstance.post<ResponseData>("/auth/reset-password", {
//     password,
//   })
// }
