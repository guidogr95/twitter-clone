export type Tweet = {
	text: string
	username: string
	profileImg?: string
	image?: string
	id?: string
	createdAt: string
	comments?: TweetComment[]
}

export type TweetComment = {
	id: string
	comment: string
	tweetId: string
	username: string
	profileImg?: string
	createdAt: string
}