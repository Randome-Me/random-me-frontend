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

  const response = await axiosServerInstance.post("/auth/login/", {
    username,
    password,
  })

  res
    .setHeader("Set-Cookie", response.headers["set-cookie"])
    .status(response.status)
    .json(response.data)
}

export default handler
