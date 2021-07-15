import gamesMock from 'components/GameCardSlider/mock'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import React from 'react'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import { QueryRecommended } from './../graphql/generated/QueryRecommended'
import { initializeApollo } from './../utils/apollo'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
