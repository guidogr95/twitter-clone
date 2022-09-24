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
    await tweetsDocRef.once("value", function(snapshot) {
      const sortedTweets = Object.values(snapshot.val() as Tweet[]).sort((a: Tweet, b: Tweet) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
      res.status(200).json({
        tweets: sortedTweets
      })
    });
  } catch (e) {
    res.status(500).send({ error: "Internal server error" })
  }
}
