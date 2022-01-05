import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { email },
  } = req

  try {
    const response = await axiosServerInstance.post(
      "/accounts/forgot-password/",
      {
        email,
      }
    )
    res.status(response.status).json(response.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
}

export default handler
