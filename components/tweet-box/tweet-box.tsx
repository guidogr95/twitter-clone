import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from "@heroicons/react/outline";
import TwButton from "../shared/tw-button/tw-button";
import { useTweetBox } from "./use-tweet-box";

export function TweetBox() {
	const {
		tweet,
		setTweet,
		shouldSubmit,
		isImgUrlBoxOpen,
		setIsImgUrlBoxOpen,
		imgInputRef,
		addImgToTweet,
		image,
		removeImgFromTweet,
		handlePostTweet,
		loading
	} = useTweetBox()

	return (
		<div className="flex space-x-2 p-5">
			<img
				className="mt-4 h-14 w-14 rounded-full object-cover"
				src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
				alt="avatar" />

				<div className="flex flex-1 pl-2 items-center">
					<form className="flex flex-1 flex-col">
						<input
							type="text"
							value={tweet}
							onChange={(e) => setTweet(e.target.value)}
							placeholder="What's Happening?"
							className="h-24 w-full text-xl outline-none placeholder:text-xl"/>
							<div className="flex items-center">
								<div className="flex flex-1 space-x-2 text-twitter">
									<PhotographIcon
										onClick={() => setIsImgUrlBoxOpen(!isImgUrlBoxOpen)}
										className="cursor-pointer h-5 w-5"/>
									<SearchCircleIcon className="h-5 w-5"/>
									<EmojiHappyIcon className="h-5 w-5"/>
									<CalendarIcon className="h-5 w-5"/>
									<LocationMarkerIcon className="h-5 w-5"/>
								</div>
								<TwButton
									loading={loading}
									type="submit"
									onClick={handlePostTweet}
									disabled={!shouldSubmit || loading}>
									Tweet
								</TwButton>
							</div>

							{isImgUrlBoxOpen && (
								<form className="rounded-lg mt-5 flex bg-twitter/80 py-2 px-4">
									<input
										ref={imgInputRef}
										className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
										type="text"
										placeholder="Enter Image URL..."/>
									<button
										type="submit"
										onClick={addImgToTweet}
										className="font-bold text-white">
											Add Image
										</button>
								</form>
							)}
							{image && (
								<div className="flex flex-col">
									<img 
										className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
										src={image}
										alt="tweet image"/>
									<TwButton 
										type="button"
										classNames="mt-4"									
										onClick={removeImgFromTweet}>
										Remove Image
									</TwButton>
								</div>
							)}
					</form>
				</div>
		</div>
	)
}
