import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { name, topicId },
    method,
    headers: { cookie },
  } = req

  if (method === "POST") {
    const { status, data } = await axiosServerInstance
      .post(
        `/topics/`,
        {
          name,
          _id: topicId,
        },
        { headers: { cookie } }
      )
      .catch(({ response: { status, data } }) => {
        return { status, data }
      })
    res.status(status).json(data)
    return
  }

  if (method === "PATCH") {
    const { status, data } = await axiosServerInstance
      .patch(
        `/topics/`,
        {
          _id: topicId,
        },
        { headers: { cookie } }
      )
      .catch(({ response: { status, data } }) => {
        return { status, data }
      })
    res.status(status).json(data)
    return
  }

  return res.status(405).json({
    message: "Method not allowed",
  })
}

export default handler
