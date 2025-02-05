"use client"
import { Stack } from "@chakra-ui/react"
import { CardAlbum } from "app/[lang]/(main)/albums/components/CardAlbum"

export const AlbumList: React.FC = () => {
  return (
    <Stack>
      <CardAlbum />
    </Stack>
  )
}
