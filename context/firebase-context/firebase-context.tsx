import { createContext, useContext } from "react"
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth, db } from "../../config/firebase"
import { addDoc, collection, Firestore, getDocs, query, where } from "firebase/firestore"
import { EmailLoginReq, EmailSignUpReq } from "./types"

type Props = {
	children: React.ReactNode
}

type FirebaseContextReturnProps = {
  handleSignInWithGoogle: () => Promise<void>
  handleLogInWithEmailAndPassword: ({ email, password }: EmailLoginReq) => Promise<void>
  registerWithEmailAndPassword: ({ email, password, username }: EmailSignUpReq) => Promise<void>
  handleLogout: () => void
  auth: Auth
  db: Firestore
}

const FirebaseContext = createContext<FirebaseContextReturnProps>({
  handleSignInWithGoogle: async() => {},
  handleLogInWithEmailAndPassword: async() => {},
  registerWithEmailAndPassword: async() => {},
  handleLogout: () => {},
  auth,
  db
})

export const ProvideFirebase = ({ children }: Props) => {
  const contextData = useProvideFirebaseContext()
  return <FirebaseContext.Provider value={contextData}>
		{children}
	</FirebaseContext.Provider>
}

export const useFirebaseContext = () => {
  return useContext(FirebaseContext)
}

function useProvideFirebaseContext () {
  const googleProvider = new GoogleAuthProvider()

  const handleSignInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user
      const q = query(collection(db, "users"), where("uid", "==", user.uid))
      const docs = await getDocs(q)
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogInWithEmailAndPassword = async ({ email, password}: EmailLoginReq) => {
    if (!email || !password) return
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
    }
  }

  const registerWithEmailAndPassword = async ({
    username,
    email,
    password
  }: EmailSignUpReq) => {
    if (!email || !password || !username) return
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      await updateProfile(user, {
        displayName: username
      })
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: username,
        authProvider: "local",
        email,
      })
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogout = () => {
    signOut(auth)
  }

  return {
    handleSignInWithGoogle,
    handleLogInWithEmailAndPassword,
    registerWithEmailAndPassword,
    handleLogout,
    auth,
    db,
  }
}