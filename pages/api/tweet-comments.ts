// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { TweetComment } from "../../types/tweet.types"
import admin from "../../config/firebase-admin"
import { ApiResponse } from "../../types/api.types"

type Data = ApiResponse & {
  comments?: TweetComment[]
}

const db = admin.database()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const tweetId = req.query?.tweetId
  if (!tweetId) {
    res.status(500).send({ error: "Internal server error" })
  }

  const tweetsDocRef = db.ref(`/tweets/${tweetId}`)

  try {
    await tweetsDocRef.once("value", function(snapshot) {
      res.status(200).json({
        comments: Object.values(snapshot.val().comments || [])
      })
    });
  } catch (e) {
    res.status(500).send({ error: "Internal server error" })
  }
}
