import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import React from 'react'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
