import { useEffect } from "react"
import { useTweetsContext } from "../../context/tweets-context"
import type { Tweet } from "../../types/tweet.types"

type Props = {
	initialTweets: Tweet[]
}

export function useHomeScreen({ initialTweets }: Props) {
	const {
    tweets,
    setTweets
  } = useTweetsContext()

	useEffect(() => {
		setTweets(initialTweets)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	

	return {
		tweets,
		setTweets
	}
}