import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import higlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import Cart, { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock
    }
  }
}