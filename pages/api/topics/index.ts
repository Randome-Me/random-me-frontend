import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { name, topicId },
    method,
    headers: { cookie },
  } = req

  if (method === "POST") {
    const response = await axiosServerInstance.post(
      `/topics/`,
      {
        name,
      },
      { headers: { cookie } }
    )
    res.status(response.status).json(response.data)
    return
  }

  if (method === "PATCH") {
    const response = await axiosServerInstance.patch(
      `/topics/`,
      {
        _id: topicId,
      },
      { headers: { cookie } }
    )
    res.status(response.status).json(response.data)
    return
  }

  return res.status(405).json({
    message: "Method not allowed",
  })
}

export default handler
