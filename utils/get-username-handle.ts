export default function getUsernameHandle(username: string): string {
	return `@${username.replace(/\s+/g, '').toLowerCase()}`
}