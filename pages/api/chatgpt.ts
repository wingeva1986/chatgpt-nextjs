// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from 'chatgpt'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const api = new ChatGPTAPI({
        sessionToken: process.env.token as string
    })
    await api.ensureAuth()
    const response = await api.sendMessage(
        req.body.message
    )
    res.status(200).json({ message: response})
}
