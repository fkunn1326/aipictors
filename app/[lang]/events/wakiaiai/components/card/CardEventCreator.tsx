import {
  Card,
  HStack,
  Stack,
  Heading,
  Image,
  IconButton,
  Icon,
  Button,
  Box,
} from "@chakra-ui/react"
import { getAnalytics, logEvent } from "firebase/analytics"
import { TbBrandTwitterFilled, TbClick, TbExternalLink } from "react-icons/tb"
import type { EventUser } from "app/[lang]/events/types/eventUser"
import { TagEventUser } from "app/[lang]/events/wakiaiai/components/tag/TagEventUser"

type Props = {
  user: EventUser
}

export const CardEventCreator: React.FC<Props> = (props) => {
  return (
    <Card overflow={"hidden"} variant={"filled"}>
      <HStack>
        <Box minW={40} w={40} h={40}>
          <a
            aria-label={"Twitter"}
            target={"_blank"}
            rel={"noopener"}
            href={
              props.user.twitterId === null
                ? undefined
                : props.user.aipictorsId === null
                ? `https://twitter.com/${props.user.twitterId}`
                : `https://www.aipictors.com/user/?id=${props.user.aipictorsId}`
            }
            onClick={() => {
              logEvent(getAnalytics(), "select_item", {
                item_list_id: props.user.twitterId ?? "-",
                item_list_name: props.user.name,
              })
            }}
          >
            <Image
              alt={props.user.name}
              src={props.user.iconImageURL}
              h={"100%"}
              borderRadius={"md"}
              boxShadow={"xl"}
              w={"100%"}
            />
          </a>
        </Box>
        <Stack
          px={{ base: 2, md: 2 }}
          spacing={{ base: 2, md: 4 }}
          h={"100%"}
          py={4}
          overflow={"hidden"}
        >
          <Stack flex={1} spacing={{ base: 2, sm: 4 }}>
            <HStack spacing={{ base: 1, sm: 2 }}>
              {props.user.types.map((type) => (
                <TagEventUser key={type} type={type} />
              ))}
            </HStack>
            <Heading as={"h2"} fontSize={{ base: 20 }}>
              {props.user.name}
            </Heading>
          </Stack>
          <HStack>
            {props.user.twitterId !== null && (
              <IconButton
                aria-label={"Twitter"}
                as={"a"}
                borderRadius={"full"}
                colorScheme={"blue"}
                icon={<Icon as={TbBrandTwitterFilled} />}
                target={"_blank"}
                rel={"noopener"}
                lineHeight={1}
                size={{ base: "sm", md: "md" }}
                href={`https://twitter.com/${props.user.twitterId}`}
              />
            )}
            {props.user.siteURL !== null && props.user.siteTitle !== null && (
              <Button
                as={"a"}
                borderRadius={"full"}
                colorScheme={"blue"}
                leftIcon={<Icon as={TbClick} />}
                target={"_blank"}
                rel={"noopener"}
                lineHeight={1}
                size={{ base: "sm", md: "md" }}
                href={props.user.siteURL}
              >
                {props.user.siteTitle}
              </Button>
            )}
            {props.user.siteURL !== null && props.user.siteTitle === null && (
              <IconButton
                aria-label={"Webサイト"}
                as={"a"}
                borderRadius={"full"}
                colorScheme={"blue"}
                icon={<Icon as={TbExternalLink} />}
                target={"_blank"}
                rel={"noopener"}
                lineHeight={1}
                size={{ base: "sm", md: "md" }}
                href={props.user.siteURL}
              />
            )}
          </HStack>
        </Stack>
      </HStack>
    </Card>
  )
}
