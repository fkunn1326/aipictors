"use client"
import {
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { TbPlus } from "react-icons/tb"
import { ViewerAlbumList } from "app/[lang]/(main)/viewer/albums/components/VIewerAlbumList"
import { ViewerAlbumAddModal } from "app/[lang]/(main)/viewer/albums/components/ViewerAlbumAddModal"

export const ViewerAlbumHeader: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Stack spacing={4}>
        <Text>{"投稿作品をシリーズにまとめてシェアしてみよう！"}</Text>
        <HStack justifyContent={"center"}>
          <IconButton
            size={"lg"}
            aria-label={"メニュー"}
            borderRadius={"full"}
            icon={<Icon as={TbPlus} />}
            onClick={onOpen}
          />
        </HStack>
        <ViewerAlbumList />
      </Stack>
      <ViewerAlbumAddModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
