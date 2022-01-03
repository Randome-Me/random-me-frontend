import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    headers: { cookie },
    method,
  } = req

  if (method !== "GET")
    return res.status(405).json({
      message: "Method not allowed",
    })

  const { data } = await axiosServerInstance
    .get("/auth/me/", {
      headers: {
        cookie,
      },
    })
    .catch<{
      data: null
    }>(({}) => ({ data: null }))
  res.json(data)
}

export default handler
