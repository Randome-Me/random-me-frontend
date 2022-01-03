import axiosServerInstance from "utils/axios/instance/server"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    headers: { cookie },
    query: { slug },
  } = req

  if (method === "POST") {
  }
}

export default handler
