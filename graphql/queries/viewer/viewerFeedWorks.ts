import { gql } from "@apollo/client"

export const VIEWER_FEED_WORKS = gql`
  query ViewerFeedWorks($offset: Int!, $limit: Int!) {
    viewer {
      feedWorks(offset: $offset, limit: $limit) {
        ...PartialFeedWorkFields
        user {
          ...PartialUserFields
          viewer {
            id
            isFollower
            isFollowee
            isMuted
          }
        }
        viewer {
          id
          isLiked
          isBookmarked
        }
      }
    }
  }
`
