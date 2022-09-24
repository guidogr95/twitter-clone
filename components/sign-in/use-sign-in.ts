import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export default function useSignIn() {
	const [username, setUsername] = useState<string | undefined>()
	const [email, setEmail] = useState<string | undefined>()
	const [password, setPassword] = useState<string | undefined>()
	const [isSignup, setIsSignup] = useState(false)
	const [loading, setIsLoading] = useState(false)

	const {
		handleLogInWithEmailAndPassword,
		registerWithEmailAndPassword,
		handleSignInWithGoogle
	} = useAuth()

	const handleSubmit = async (e: Event) => {
		e.preventDefault()
		setIsLoading(true)
		if (isSignup) {
			await registerWithEmailAndPassword({
				username,
				email,
				password
			})
		} else {
			await handleLogInWithEmailAndPassword({
				email,
				password
			})
		}
		setIsLoading(false)
	}

	const shouldSubmit = !email || !password || loading || (isSignup && !username)

	return {
		username,
		setUsername,
		email,
		setEmail,
		password,
		setPassword,
		handleSignInWithGoogle,
		handleLogInWithEmailAndPassword,
		isSignup,
		setIsSignup,
		handleSubmit,
		loading,
		shouldSubmit
	}
}