"use client"
import {
  Image,
  Text,
  Button,
  Card,
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react"
import { TbTrash } from "react-icons/tb"

export const ViewerAlbum: React.FC = () => {
  return (
    <Card>
      <Button
        p={0}
        h={"auto"}
        overflow={"hidden"}
        variant={"outline"}
        borderWidth={2}
      >
        <Image
          src="https://source.unsplash.com/random/800x600"
          alt=""
          boxSize={"unset"}
        />
      </Button>
      <HStack px={2} justifyContent={"space-between"}>
        <Text>{"タイトル"}</Text>
        <IconButton
          size={"md"}
          aria-label={"メニュー"}
          borderRadius={"full"}
          icon={<Icon as={TbTrash} />}
          onClick={() => {
            alert("削除しますか？")
          }}
        />
      </HStack>
    </Card>
  )
}
