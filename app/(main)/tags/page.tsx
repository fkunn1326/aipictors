import { Metadata } from "next"
import { PagePlaceholder } from "app/components/PagePlaceholder"

const HomePage = async () => {
  return <PagePlaceholder>{"タグの一覧"}</PagePlaceholder>
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default HomePage
