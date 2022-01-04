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
      const { data } = await axiosServerInstance.patch(
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
      res.status(200).json(data)
    } catch (error) {
      res.status(error.response.status).json(error.response.data)
    }
    return
  }

  return res.status(405).json({
    message: "Method not allowed",
  })
}

export default handler
