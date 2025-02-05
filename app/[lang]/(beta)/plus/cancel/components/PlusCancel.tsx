"use client"
import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { TbMoodCry } from "react-icons/tb"

export const PlusCancel: React.FC = () => {
  return (
    <Stack spacing={16} maxW={"sm"} w={"100%"} px={6} pt={16}>
      <Stack spacing={4}>
        <HStack justifyContent={"center"}>
          <Icon as={TbMoodCry} fontSize={"8rem"} color={"gray.400"} />
        </HStack>
        <Stack>
          <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
            {"決済に失敗しました"}
          </Text>
          <Text>
            {
              "決済処理がキャンセルされました。再度決済を行う場合は、ホームに戻ってください。"
            }
          </Text>
        </Stack>
      </Stack>
      <HStack justifyContent={"center"}>
        <Button as={Link} href={"/plus"} replace>
          {"ホームに戻る"}
        </Button>
      </HStack>
    </Stack>
  )
}
