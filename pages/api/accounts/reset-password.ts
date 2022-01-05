import axiosServerInstance from "utils/axios/instance/server"
import { NextApiResponse } from "next"
import { NextApiRequest } from "next"
import { ResetPasswordBody } from "utils/axios/request/auth"

interface Req extends NextApiRequest {
  body: ResetPasswordBody
}

const handler = async (req: Req, res: NextApiResponse) => {
  const { body: payload } = req

  try {
    const { status, data } = await axiosServerInstance.post(
      "/accounts/reset-password/",
      payload
    )
    res.status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
