import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"
import { ForgotPasswordPayload } from "utils/axios/request/auth"

interface Req extends NextApiRequest {
  body: ForgotPasswordPayload
}

const handler = async (req: Req, res: NextApiResponse) => {
  const {
    body: { email, language },
  } = req
  const payload: ForgotPasswordPayload = {
    email,
    language,
  }

  try {
    const { data, status } = await axiosServerInstance.post(
      "/accounts/forgot-password/",
      payload
    )
    res.status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
