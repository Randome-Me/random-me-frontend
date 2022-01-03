import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { email, username, password, confirmPassword },
    method,
  } = req

  if (method !== "POST")
    return res.status(405).json({
      message: "Method not allowed",
    })

  const response = await axiosServerInstance.post("/auth/register/", {
    email,
    username,
    password,
    confirmPassword,
  })

  res
    .setHeader("Set-Cookie", response.headers["set-cookie"])
    .status(response.status)
    .json(response.data)
}

export default handler
