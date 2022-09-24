import axios from "axios"
import uuid from 'react-uuid';
import { Tweet, TweetComment } from "../../types/tweet.types"

export const fetchTweets = async (): Promise<Tweet[]> => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweets`)
	return res.data.tweets
}

export const fetchTweetComments = async (tweetId: string): Promise<TweetComment[]> => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweet-comments?tweetId=${tweetId}`)
	return res.data.comments
}

export const addTweet = async (data: Tweet) => {
	const res = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/add-tweet`,
			{
				...data,
				id: uuid()
			}
		)
	return res.data
}