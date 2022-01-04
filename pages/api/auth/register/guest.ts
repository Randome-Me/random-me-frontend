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
    const response = await axiosServerInstance.post("/auth/register/guest/", {
      username,
      email,
      password,
      confirmPassword,
      language,
      selectedTopicId,
      topics,
    })

    res
      .setHeader("Set-Cookie", response.headers["set-cookie"])
      .status(response.status)
      .json(response.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
}

export default handler
