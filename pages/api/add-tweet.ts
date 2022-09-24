// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Tweet } from "../../types/tweet.types"
import admin from "../../config/firebase-admin"
import { ApiResponse } from "../../types/api.types"

type Data = ApiResponse & {
  tweets?: Tweet[]
}
const tweetsDocRef = admin.database().ref("/tweets")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const dbres = await tweetsDocRef.child(req.body.id).set({
      ...req.body
    })
    res.status(200).json({ message: dbres })
  } catch (e) {
    res.status(500).send({ error: "Internal server error" })
  }
}
