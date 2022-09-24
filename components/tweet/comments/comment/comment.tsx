import TimeAgo from "react-timeago"
import { TweetComment } from "../../../../types/tweet.types"
import getUsernameHandle from "../../../../utils/get-username-handle"

type Props = TweetComment

export function Comment({
	comment,
	username,
	profileImg,
	createdAt,
}: Props) {
	return (
		<div className="relative flex space-x-2">
			<hr className="absolute left-5 top-10 h-8 border-x border-twitter/30"/>
			<img
				className="mt-2 h-7 w-7 rounded-full object-cover"
				src={profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
				alt="user avatar"/>

			<div>
				<div className="flex items-center space-x-1">
					<p className="mr-1 font-bold">{username}</p>
					<p className="hidden text-sm text-gray-500 lg:inline">
						{getUsernameHandle(username)}
					</p>
					<TimeAgo
						className="text-sm text-gray-500"
						date={createdAt}/>
				</div>
				<p>{comment}</p>
			</div>
		</div>
	)
}
