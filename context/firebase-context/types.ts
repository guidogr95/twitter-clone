export type EmailLoginReq = {
	email?: string
	password?: string
}

export type EmailSignUpReq = EmailLoginReq & {
	username?: string
}