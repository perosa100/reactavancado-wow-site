import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

import { BannerFragment } from './../fragments/banner'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: 10
    ) {
      ...GameFragment
    }
    upcomingGame: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 10
    ) {
      ...GameFragment
    }

    freeGames: games(
      where: { price: 0 }
      sort: "release_date:desc"
      limit: 10
    ) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games(limit: 8) {
          ...GameFragment
        }
      }

      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }

      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${HighlightFragment}
  ${BannerFragment}
  ${GameFragment}
`
