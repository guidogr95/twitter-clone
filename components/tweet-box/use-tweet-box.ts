import React, { useRef, useState } from "react"
import { useTweetsContext } from "../../context/tweets-context"
import { useAuth } from "../../hooks/auth"
import { addTweet } from "../../lib/api/api"

export function useTweetBox() {
	const [tweet, setTweet] = useState('')
	const [isImgUrlBoxOpen, setIsImgUrlBoxOpen] = useState(false)
	const [image, setImage] = useState('')
	const [loading, setLoading] = useState(false)
	const imgInputRef = useRef<HTMLInputElement>(null)

	const shouldSubmit = tweet.trim() !== ''

	const {
		authState
	} = useAuth()

	const { user } = authState

	const {
		handleRefreshTweets
	} = useTweetsContext()

	const addImgToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		if (!imgInputRef.current?.value) return

		setImage(imgInputRef.current.value)
		imgInputRef.current.value = ''
		setIsImgUrlBoxOpen(false)
	}
	const removeImgFromTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		setImage('')
	}

	const handlePostTweet = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		setLoading(true)
		await addTweet({
			text: tweet,
			image,
			username: user?.displayName || '',
			createdAt: new Date().toString()
		})
		setLoading(false)
		setTweet('')
		setImage('')
		handleRefreshTweets()
	}

	return {
		tweet,
		setTweet,
		shouldSubmit,
		isImgUrlBoxOpen,
		setIsImgUrlBoxOpen,
		imgInputRef,
		addImgToTweet,
		image,
		setImage,
		removeImgFromTweet,
		handlePostTweet,
		loading
	}
}