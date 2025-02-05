"use client"
import { Card, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { toElapsedTimeText } from "app/utils/toElapsedTimeText"

type Props = {
  text: string
  createdAt: number
}

export const SenderMessage: React.FC<Props> = (props) => {
  const bg = useColorModeValue("teal.200", "teal.600")

  return (
    <HStack justifyContent={"flex-end"}>
      <Stack maxW={"sm"}>
        <Card
          variant={"filled"}
          px={6}
          py={2}
          borderTopRightRadius={"sm"}
          borderTopLeftRadius={"xl"}
          borderBottomRightRadius={"xl"}
          borderBottomLeftRadius={"xl"}
          bg={bg}
        >
          <Text whiteSpace={"pre-wrap"}>{props.text}</Text>
        </Card>
        <HStack justifyContent={"flex-end"}>
          <Text fontSize={"2xs"}> {toElapsedTimeText(props.createdAt)}</Text>
        </HStack>
      </Stack>
    </HStack>
  )
}
