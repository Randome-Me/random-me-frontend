import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    headers: { cookie },
    query: { slug },
    body: { field, value, reward },
  } = req
  const [topicId, optionId] = slug as string[]

  // edit bias or name of the option
  if (method === "PATCH") {
    const { status, data } = await axiosServerInstance
      .patch(
        `topics/${topicId}/${optionId}/`,
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

  // pull the arm
  if (method === "POST") {
    const { status, data } = await axiosServerInstance
      .post(
        `topics/${topicId}/${optionId}/`,
        {
          reward,
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

  // delete the option
  if (method === "DELETE") {
    const { status, data } = await axiosServerInstance
      .delete(`topics/${topicId}/${optionId}/`, {
        headers: { cookie },
      })
      .catch(({ response: { status, data } }) => {
        return { status, data }
      })
    res.status(status).json(data)
    return
  }

  res.status(403).json({ error: "Method not allowed" })
}

export default handler
