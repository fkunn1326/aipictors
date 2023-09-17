"use client"
import { Stack } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = (props) => {
  return (
    <Stack overflowX={"hidden"} pb={4} w={"100%"}>
      {props.children}
    </Stack>
  )
}
