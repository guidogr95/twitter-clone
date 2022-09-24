import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	MailIcon,
	UserIcon,
	HomeIcon
} from "@heroicons/react/outline"
import { useAuth } from "../../hooks/auth"
import { SidebarRow } from "./sidebar-row/sidebar-row"

export function Sidebar() {
	const {
		handleLogout
	} = useAuth()

	return (
		<div className="flex flex-col col-span-2 items-center px-4 md:items-start">
			<img
				className="h-10 w-10 m-3"
				src="https://i.imgur.com/YNBb0Ho.png"
				alt="twitter logo"/>
			<SidebarRow
				Icon={HomeIcon}
				title="Home"/>
			<SidebarRow
				Icon={HashtagIcon}
				title="Explore"/>
			<SidebarRow
				Icon={BellIcon}
				title="Notifications"/>
			<SidebarRow
				Icon={MailIcon}
				title="Messages"/>
			<SidebarRow
				Icon={BookmarkIcon}
				title="Bookmarks"/>
			<SidebarRow
				Icon={CollectionIcon}
				title="Lists"/>
			<SidebarRow
				onClick={handleLogout}
				Icon={UserIcon}
				title="Sign Out"/>
			<SidebarRow
				Icon={DotsCircleHorizontalIcon}
				title="More"/>
		</div>
	)
}