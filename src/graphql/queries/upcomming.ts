import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMMING = gql`
  query QueryUpcomming($date: Date!) {
    upcomingGame: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 10
    ) {
      ...GameFragment
    }

    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }
  ${HighlightFragment}
  ${GameFragment}
`
