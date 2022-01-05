import { AxiosError } from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { username, password },
    method,
  } = req

  if (method !== "POST")
    return res.status(405).json({
      message: "Method not allowed",
    })

  try {
    const { status, data, headers } = await axiosServerInstance.post(
      "/auth/login/",
      {
        username,
        password,
      }
    )
    res.setHeader("Set-Cookie", headers["set-cookie"]).status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
