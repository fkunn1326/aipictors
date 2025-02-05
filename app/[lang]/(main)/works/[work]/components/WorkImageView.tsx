"use client"
import { Stack, Image } from "@chakra-ui/react"

type Props = {
  workImageURL?: string
  subWorkImageURLs: string[]
}

export const WorkImageView: React.FC<Props> = (props) => {
  return (
    <Stack>
      <Image
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
        borderRadius={"md"}
        alt={""}
        src={props.workImageURL}
      />
      {props.subWorkImageURLs.map((imageURL) => (
        <Image
          key={imageURL}
          w={"100%"}
          h={"100%"}
          borderRadius={"md"}
          alt={""}
          src={imageURL}
        />
      ))}
    </Stack>
  )
}
