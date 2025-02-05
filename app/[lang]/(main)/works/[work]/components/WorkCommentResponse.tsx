"use client"
import { Avatar, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { toDateTimeText } from "app/utils/toDateTimeText"

type Props = {
  userIconImageURL?: string
  userName?: string
  text?: string
  stickerImageURL?: string
  createdAt: number
}

export const WorkCommentResponse: React.FC<Props> = (props) => {
  return (
    <HStack alignItems={"flex-start"} pl={16}>
      <Avatar src={props.userIconImageURL} />
      <Stack spacing={0}>
        <Text>{props.userName}</Text>
        <Text>{props.text}</Text>
        {props.stickerImageURL && (
          <Image w={32} alt={""} src={props.stickerImageURL} />
        )}
        <HStack>
          <Text fontSize={"xs"}>{toDateTimeText(props.createdAt)}</Text>
          <Text fontSize={"xs"}>{"返信"}</Text>
          <Text fontSize={"xs"}>{"ダウンロード"}</Text>
        </HStack>
      </Stack>
    </HStack>
  )
}
