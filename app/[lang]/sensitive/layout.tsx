"use client"
import { Divider, HStack } from "@chakra-ui/react"
// useState をインポート
import { HomeHeader } from "app/[lang]/(main)/components/HomeHeader"
import { SensitiveNavigation } from "app/[lang]/sensitive/components/SensitiveNavigation"
import { HomeFooter } from "app/components/HomeFooter"
import { useNavigation } from "app/hooks/useNavigation"

type Props = {
  children: React.ReactNode
}

const SensitiveLayout: React.FC<Props> = (props) => {
  const [isOpenNavigation, openNavigation] = useNavigation()

  return (
    <>
      <HomeHeader onOpenNavigation={openNavigation} />
      <HStack alignItems={"flex-start"} spacing={0}>
        {isOpenNavigation && <SensitiveNavigation />}
        {props.children}
      </HStack>
      <Divider />
      <HomeFooter />
    </>
  )
}

export default SensitiveLayout
