import type { Metadata } from "next"
import { NoteArticle } from "app/[lang]/(main)/notes/[note]/components/NoteArticle"
import { MainPage } from "app/components/MainPage"

const NotePage = async () => {
  return (
    <MainPage>
      <NoteArticle />
    </MainPage>
  )
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default NotePage
