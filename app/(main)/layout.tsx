"use client"
import { Divider, HStack } from "@chakra-ui/react"
import type { FC } from "react"
import { HomeHeader } from "app/(main)/components/HomeHeader"
import { HomeNavigation } from "app/(main)/components/HomeNavigation"
import { FooterHome } from "app/components/FooterHome"

type Props = {
  children: React.ReactNode
}

const MainLayout: FC<Props> = (props) => {
  return (
    <>
      <HomeHeader />
      <HStack alignItems={"flex-start"} spacing={0}>
        <HomeNavigation />
        {props.children}
      </HStack>
      <Divider />
      <FooterHome />
    </>
  )
}

export default MainLayout
