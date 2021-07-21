import gamesMock from 'components/GameCardSlider/mock'
import { QUERY_HOME } from 'graphql/queries/home'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { bannerMaper, gamesMapper, highlightMapper } from 'utils/mappers'

import { QueryHome, QueryHomeVariables } from './../graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, upcomingGame, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      banners: bannerMaper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),

      upcommingGames: gamesMapper(upcomingGame),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      upcommingMoreGames: gamesMock,

      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.upcomingGames?.highlight)
    }
  }
}
