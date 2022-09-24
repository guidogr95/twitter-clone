import { useEffect, useState } from "react"
import { fetchTweetComments } from "../../lib/api/api"
import { TweetComment } from "../../types/tweet.types"

type Props = {
	tweetId: string
}

export function useTweet({ tweetId }: Props) {
	const [comments, setComments] = useState<TweetComment[]>([])

	const handleRefreshComments = async (tweetId: string) => {
		const comments: TweetComment[] = await fetchTweetComments(tweetId)
		setComments(comments)
	}

	useEffect(() => {
		handleRefreshComments(tweetId)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		comments
	}
}