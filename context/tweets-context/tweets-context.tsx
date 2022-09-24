import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import { fetchTweets } from '../../lib/api/api'
import type { Tweet } from '../../types/tweet.types'
import toast from 'react-hot-toast'


type Props = {
	children: React.ReactNode
}

type ContextReturnProps = {
  tweets: Tweet[]
  setTweets: Dispatch<SetStateAction<Tweet[]>>
  handleRefreshTweets: () => Promise<void>
}

const TweetsContext = createContext<ContextReturnProps>({
  tweets: [],
  setTweets: () => {},
  handleRefreshTweets: async () => {}
})

export const ProvideTweets = ({ children }: Props) => {
  const contextData = useProvideTweetsContext()
  return <TweetsContext.Provider value={contextData}>
		{children}
	</TweetsContext.Provider>
}

export const useTweetsContext = () => {
  return useContext(TweetsContext)
}

function useProvideTweetsContext () {
  const [tweets, setTweets] = useState<Tweet[]>([])

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
    tweets,
    setTweets,
    handleRefreshTweets
  }
}