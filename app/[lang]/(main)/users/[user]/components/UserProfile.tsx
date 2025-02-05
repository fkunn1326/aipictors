"use client"
import {
  Stack,
  Avatar,
  Text,
  HStack,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react"
import React from "react"
import { TbHeartFilled, TbEye, TbUser, TbMedal2, TbAward } from "react-icons/tb"
import type { UserQuery } from "__generated__/apollo"
import { UserMuteMenu } from "app/[lang]/(main)/users/[user]/components/UserMuteMenu"
import { UserPickUp } from "app/[lang]/(main)/users/[user]/components/UserPickUp"
import { FollowButton } from "app/components/FollowButton"
import { LinkEmailButton } from "app/components/LinkEmailButton"
import { LinkWebButton } from "app/components/LinkWebButton"
import { ShareButton } from "app/components/ShareButton"
import { SocialInstagramButton } from "app/components/SocialInstagramButton"
import { SocialTwitterButton } from "app/components/SocialTwitterButton"

type Props = {
  user: NonNullable<UserQuery["user"]>
  userIconImageURL: string | null
  userReceivedLikesCount: number
  userReceivedViewsCount: number
  userFollowersCount: number
  userAwardsCount: number
  userBiography: string | null
  userName: string
}
/**
 * ユーザープロフィール
 * @param props
 * @returns
 */
export const UserProfile: React.FC<Props> = (props) => {
  return (
    <Stack>
      <Avatar
        name={props.userName}
        src={props.userIconImageURL ?? ""}
        size={"lg"}
      />
      <HStack>
        <Text fontWeight={"bold"} fontSize={"lg"}>
          {props.userName}
        </Text>
        <FollowButton />
        <ShareButton />
        <UserMuteMenu />
      </HStack>
      <HStack>
        <Stack>
          <HStack>
            <Icon as={TbHeartFilled} fontSize={"sm"} />
            <Text fontSize={"sm"}>{props.userReceivedLikesCount}</Text>
            <Text fontSize={"sm"}>{"いいねされた"}</Text>
          </HStack>
          <HStack>
            <Icon as={TbEye} fontSize={"sm"} />
            <Text fontSize={"sm"}>{props.userReceivedViewsCount}</Text>
            <Text fontSize={"sm"}>{"閲覧された"}</Text>
          </HStack>
        </Stack>
        <Stack>
          <HStack>
            <Icon as={TbUser} fontSize={"sm"} />
            <Text fontSize={"sm"}>{props.userFollowersCount}</Text>
            <Text fontSize={"sm"}>{"フォロワー"}</Text>
          </HStack>
          <HStack>
            <Icon as={TbMedal2} fontSize={"sm"} />
            <Text fontSize={"sm"}>{props.userAwardsCount}</Text>
            <Text fontSize={"sm"}>{"入賞数"}</Text>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Icon as={TbAward} fontSize={"sm"} />
        <ChakraLink fontSize={"sm"}>{"実績・トロフィーはこちら"}</ChakraLink>
      </HStack>
      {props.userBiography && (
        <Text fontSize={"sm"}>{props.userBiography}</Text>
      )}
      <HStack>
        <SocialTwitterButton />
        <SocialInstagramButton />
        <LinkEmailButton />
        <LinkWebButton />
      </HStack>
      <UserPickUp />
    </Stack>
  )
}
