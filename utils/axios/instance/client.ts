import axios from "axios"

const axiosClientInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "api/",
})

export default axiosClientInstance
