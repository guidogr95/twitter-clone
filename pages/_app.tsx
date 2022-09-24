import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ProvideFirebase } from "../context/firebase-context/firebase-context"
import { ProvideTweets } from "../context/tweets-context"
import { Toaster } from "react-hot-toast"
import AuthWrapper from "../components/auth-wrapper/auth-wrapper"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ProvideFirebase>
    <ProvideTweets>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    <Toaster/>
    </ProvideTweets> 
  </ProvideFirebase> 
  )
}

export default MyApp
