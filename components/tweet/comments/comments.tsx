import { TweetComment } from "../../../types/tweet.types"
import { Comment } from "./comment/comment"

type Props = {
	comments?: TweetComment[]
}

export function Comments({ comments }: Props) {
	if (!comments?.length) {
		return null
	}
	return (
		<div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
			{comments.map((comment: TweetComment) => {
				return (
					<Comment
						key={comment.id}
						{...comment}/>
				)
			})}
		</div>
	)
}
