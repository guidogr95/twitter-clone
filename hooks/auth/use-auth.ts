import { useFirebaseContext } from "../../context/firebase-context/firebase-context"
import { useAuthState } from "react-firebase-hooks/auth";

export function useAuth() {
	const {
		handleSignInWithGoogle,
    handleLogInWithEmailAndPassword,
    registerWithEmailAndPassword,
    handleLogout,
    auth,
	} = useFirebaseContext()

	const [user, loading, error] = useAuthState(auth)

	return {
		authState: {
			user,
			loading,
			error,
		},
		handleSignInWithGoogle,
    handleLogInWithEmailAndPassword,
    registerWithEmailAndPassword,
    handleLogout,
	}
}