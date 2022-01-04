import axios from "axios"

const axiosServerInstance = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosServerInstance
