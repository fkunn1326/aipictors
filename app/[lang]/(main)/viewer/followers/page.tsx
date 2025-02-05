import type { Metadata } from "next"
import { MainViewerFollowers } from "app/[lang]/(main)/viewer/followers/components/MainViewerFollowers"

const ViewerFollowersPage = async () => {
  return <MainViewerFollowers />
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default ViewerFollowersPage
