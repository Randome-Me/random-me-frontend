import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { name, bias, value, field, optionId },
    method,
    query: { topicId },
    headers: { cookie },
  } = req

  if (method === "POST") {
    const { status, data } = await axiosServerInstance
      .post(
        `/topics/${topicId}/`,
        {
          name,
          bias,
          _id: optionId,
        },
        {
          headers: { cookie },
        }
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
        `/topics/${topicId}/`,
        {
          field,
          value,
        },
        {
          headers: { cookie },
        }
      )
      .catch(({ response: { status, data } }) => {
        return { status, data }
      })
    res.status(status).json(data)
    return
  }

  if (method === "PUT") {
    const { status, data } = await axiosServerInstance
      .put(
        `/topics/${topicId}/`,
        {},
        {
          headers: { cookie },
        }
      )
      .catch(({ response: { status, data } }) => {
        return { status, data }
      })
    res.status(status).json(data)
    return
  }

  if (method === "DELETE") {
    const { status, data } = await axiosServerInstance
      .delete(`/topics/${topicId}/`, {
        headers: { cookie },
      })
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
