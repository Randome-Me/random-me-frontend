import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { email },
  } = req

  try {
    const { data, status } = await axiosServerInstance.post(
      "/accounts/forgot-password/",
      {
        email,
      }
    )
    res.status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
