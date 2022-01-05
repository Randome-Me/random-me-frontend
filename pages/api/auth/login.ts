import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"
import { LoginPayload } from "utils/axios/request/auth"

interface Req extends NextApiRequest {
  body: LoginPayload
}

const handler = async (req: Req, res: NextApiResponse) => {
  const {
    body: { username, password, language },
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
        language,
      }
    )
    res.setHeader("Set-Cookie", headers["set-cookie"]).status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
