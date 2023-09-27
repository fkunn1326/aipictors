"use client"
import { Stack } from "@chakra-ui/react"
import { CardNote } from "app/(main)/notes/components/CardNote"

export const NoteList: React.FC = () => {
  return (
    <Stack>
      <CardNote />
    </Stack>
  )
}
