import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { email, username, password, confirmPassword, language },
    method,
  } = req

  if (method !== "POST")
    return res.status(405).json({
      message: "Method not allowed",
    })

  try {
    const { status, data, headers } = await axiosServerInstance.post(
      "/auth/register/",
      {
        email,
        username,
        password,
        confirmPassword,
        language,
      }
    )
    res.setHeader("Set-Cookie", headers["set-cookie"]).status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
