import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { name, bias, value, field },
    method,
    query: { topicId },
    headers: { cookie },
  } = req

  if (method === "POST") {
    const response = await axiosServerInstance.post(
      `/topics/${topicId}`,
      {
        name,
        bias,
      },
      {
        headers: { cookie },
      }
    )
    res.status(response.status).json(response.data)
    return
  }

  if (method === "PATCH") {
    const response = await axiosServerInstance.patch(
      `/topics/${topicId}`,
      {
        field,
        value,
      },
      {
        headers: { cookie },
      }
    )
    res.status(response.status).json(response.data)
    return
  }

  if (method === "PUT") {
    const response = await axiosServerInstance.put(
      `/topics/${topicId}`,
      {},
      {
        headers: { cookie },
      }
    )
    res.status(response.status).json(response.data)
    return
  }

  if (method === "DELETE") {
    const response = await axiosServerInstance.delete(`/topics/${topicId}`, {
      headers: { cookie },
    })
    res.status(response.status).json(response.data)
    return
  }

  return res.status(405).json({
    message: "Method not allowed",
  })
}

export default handler
