"use client"
import { Box, Stack, Text } from "@chakra-ui/react"

type Props = {
  children?: React.ReactNode
}

export const PlaceholderPage: React.FC<Props> = (props) => {
  return (
    <Stack
      p={4}
      h={"calc(100svh - 64px)"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Text>{props.children ?? "Placeholder"}</Text>
      </Box>
    </Stack>
  )
}
