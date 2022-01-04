import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  if (method !== "POST")
    return res.status(405).json({
      message: "Method not allowed",
    })

  await axiosServerInstance.post("/auth/logout/")
  res.setHeader(
    "Set-Cookie",
    "jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  )
  res.end()
}

export default handler
