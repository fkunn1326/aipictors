"use client"
import { Stack } from "@chakra-ui/react"
import { NotificationList } from "app/(main)/viewer/notifications/components/NotificationList"
import { NotificationTab } from "app/(main)/viewer/notifications/components/NotificationTab"

export const NotificationArticle: React.FC = () => {
  return (
    <Stack>
      <NotificationTab />
      <NotificationList />
    </Stack>
  )
}
