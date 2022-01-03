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

  const { data, status } = await axiosServerInstance.get("/auth/me/", {
    headers: {
      cookie,
    },
  })
  console.log(">>> | data", data)
  res.status(status).json(data)
}

export default handler
