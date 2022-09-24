import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from "@heroicons/react/outline"
import TimeAgo from "react-timeago"
import type { Tweet } from "../../types/tweet.types"
import getUsernameHandle from "../../utils/get-username-handle"
import { Comments } from "./comments"
import { useTweet } from "./use-tweet"

type Props = Tweet
export function Tweet({
	text,
	username,
	profileImg,
	image,
	createdAt,
	id
}: Props) {

	const {
		comments
	} = useTweet({ tweetId: id })

	return (
		<div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
			<div className="flex space-x-3">
				<img 
					className="h-10 w-10 rounded-full object-cover"
					src={profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
					alt="user avatar"/>
				<div>
					<div className="flex items-center space-x-1">
						<p className="mr-1 font-bold">{username}</p>
						<p className="hidden text-sm text-gray-500 sm:inline">
							{getUsernameHandle(username)}
						</p>
						<TimeAgo
							className="text-sm text-gray-500"
							date={createdAt}/>
					</div>
					<p className="pt-1">{text}</p>
					{image &&
						<img
							src={image}
							alt="tweet-image"
							className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-covers shadow-sm"/>
					}
				</div>
			</div>
			
			<div className="mt-5 flex justify-between">

				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<ChatAlt2Icon className="h-5 w-5"/>
					<p>{comments?.length || 0}</p>
				</div>

				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<SwitchHorizontalIcon className="h-5 w-5"/>
				</div>

				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<HeartIcon className="h-5 w-5"/>
				</div>

				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<UploadIcon className="h-5 w-5"/>
				</div>

			</div>

			<Comments comments={comments}/>
		</div>
	)
}
