import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Feed } from "../components/feed"
import { Sidebar } from "../components/sidebar"
import { Widgets } from "../components/widgets"
import { useHomeScreen } from "../hooks/home/use-home-screen"
import { fetchTweets } from "../lib/api/api"
import type { Tweet } from "../types/tweet.types"

type Props = {
  initialTweets: Tweet[]
}

const Home = ({ initialTweets }: Props) => {
  const {
    tweets
  } = useHomeScreen({ initialTweets })
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar/>
        <Feed tweets={tweets}/>
        <Widgets/>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
   const tweets = await fetchTweets()

   return {
    props: {
      initialTweets: tweets
    }
   }
}
