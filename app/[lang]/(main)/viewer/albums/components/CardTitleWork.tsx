"use client"
import { Button, Card, Image, Text } from "@chakra-ui/react"

export const CardTitleWork: React.FC = () => {
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
          boxSize={28}
        />
      </Button>
      <Text fontSize={"xs"}>{"title"}</Text>
    </Card>
  )
}
