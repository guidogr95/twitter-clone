import { useCallback } from "react"
import { useTweetsContext } from "../../context/tweets-context"
import { fetchTweets } from "../../lib/api/api"
import toast from 'react-hot-toast'

export function useFeed() {
	const {
    setTweets
  } = useTweetsContext()

	const handleRefreshTweets = useCallback(
		async () => {
			const refreshToast = toast.loading('Refreshing...')
			const tweets = await fetchTweets()
			setTweets(tweets)
			toast.success('Feed Updated!', {
				id: refreshToast
			})
		},
		[setTweets]
	)

	return {
		handleRefreshTweets
	}
}