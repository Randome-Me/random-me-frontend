import { NextApiRequest, NextApiResponse } from "next"
import axiosServerInstance from "utils/axios/instance/server"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { language },
    method,
    headers: { cookie },
  } = req

  if (method === "PATCH") {
    try {
      const { data, status } = await axiosServerInstance.patch(
        "/accounts/language/",
        {
          language,
        },
        {
          headers: {
            cookie,
          },
        }
      )
      res.status(status).json(data)
    } catch ({ response: { status, data } }) {
      res.status(status).json(data)
    }
    return
  }

  return res.status(405).json({
    message: "Method not allowed",
  })
}

export default handler
