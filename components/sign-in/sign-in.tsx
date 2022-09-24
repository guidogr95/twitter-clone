import { FcGoogle } from "react-icons/fc"
import TwButton from "../shared/tw-button/tw-button";
import useSignIn from "./use-sign-in";

export function SignIn() {
	const {
		username,
		setUsername,
		email,
		setEmail,
		password,
		setPassword,
		setIsSignup,
		isSignup,
		handleSubmit,
		loading,
		shouldSubmit,
		handleSignInWithGoogle
	} = useSignIn()

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-white/80 flex items-center justify-center">
			<div className="flex items-center justify-center relative pl-9 pr-9 rounded shadow-lg w-[600px] h-[600px] bg-[#F5F5F5]">
				<div className="flex flex-col items-center justify-center w-[260px]">
					<img
						className="h-10 w-10 m-3"
						src="https://i.imgur.com/YNBb0Ho.png"
						alt="twitter logo"/>
					<p className="text-3xl font-bold gray mb-6">Sign in to Twitter</p>
					<TwButton
						onClick={handleSignInWithGoogle}
						classNames="w-full"
						style="outline">
						<div className="flex items-center ">
							<FcGoogle
								className="mr-2"/>
							Sign in with Google
						</div>
					</TwButton>
					<p className="mb-4 mt-4">or</p>
					<form className="flex flex-col items-center" onSubmit={handleSubmit}>
						{isSignup &&
							<input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full outline-none placeholder:text-lg h-6 rounded text-lg p-5 mb-4"
								type="text"
								placeholder="username"/>
						}
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full outline-none placeholder:text-lg h-6 rounded text-lg p-5 mb-4"
							type="text"
							placeholder="email"/>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full outline-none placeholder:text-lg h-6 rounded text-lg p-5"
							type="password"
							placeholder="password"/>
						<TwButton
							disabled={shouldSubmit}
							loading={loading}
							style="dark"
							classNames="w-full mt-6">
							{isSignup ? 'Sign Up' : 'Sign In'}
						</TwButton>
					</form>
					<p
						className="mt-4">
						{isSignup ? 'Already' : "Don't"} have an account? <span onClick={() => setIsSignup(!isSignup)} className="text-twitter cursor-pointer hover:underline">{!isSignup ? 'Sign Up' : 'Sign In'}</span>
					</p>
				</div>
			</div>
		</div>
	)
}
