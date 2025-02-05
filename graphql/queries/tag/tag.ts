import { gql } from "@apollo/client"

export const TAG = gql`
  query Tag($name: String!) {
    tag(name: $name) {
      id
      name
      viewer {
        isLiked
        isWatched
        isMuted
      }
    }
  }
`
