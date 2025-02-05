import type { Metadata } from "next"
import { MainSettingContents } from "app/[lang]/(main)/settings/contents/components/MainSettingContents"

const SettingContentsPage = async () => {
  return <MainSettingContents />
}

export const metadata: Metadata = {
  robots: { index: false },
  title: "-",
}

export const revalidate = 60

export default SettingContentsPage
