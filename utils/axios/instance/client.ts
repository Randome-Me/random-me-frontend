import axios from "axios"

const axiosClientInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.BACKEND_BASE_URL,
})

export default axiosClientInstance
