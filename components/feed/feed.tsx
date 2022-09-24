import { RefreshIcon } from "@heroicons/react/outline";
import { useTweetsContext } from "../../context/tweets-context";
import type { Tweet } from "../../types/tweet.types";
import { Tweet as TweetComponent } from "../tweet";
import { TweetBox } from "../tweet-box";

type Props = {
	tweets: Tweet[]
}

export function Feed({ tweets }: Props) {
	const {
		handleRefreshTweets
  } = useTweetsContext()

	return (
		<div className="col-span-7 lg:col-span-5 border-x">
			<div className="flex items-center justify-between">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<RefreshIcon
					onClick={handleRefreshTweets}
					className="h-8 w-8 cursor-pointer mr-5 mt-5 text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
			</div>
			<div>
				<TweetBox/>
			</div>
			<div>
				{tweets.map((tweet: Tweet) => {
					return (
						<TweetComponent
							key={tweet.id}
							{...tweet}
							/>
					)
				})}
			</div>
		</div>
	)
}
