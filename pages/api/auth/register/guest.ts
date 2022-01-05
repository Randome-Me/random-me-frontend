import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: {
      username,
      email,
      password,
      confirmPassword,
      language,
      selectedTopicId,
      topics,
    },
    method,
  } = req

  if (method !== "POST")
    return res.status(405).json({
      message: "Method not allowed",
    })

  try {
    const { status, data, headers } = await axiosServerInstance.post(
      "/auth/register/guest/",
      {
        username,
        email,
        password,
        confirmPassword,
        language,
        selectedTopicId,
        topics,
      }
    )
    res.setHeader("Set-Cookie", headers["set-cookie"]).status(status).json(data)
  } catch ({ response: { status, data } }) {
    res.status(status).json(data)
  }
}

export default handler
