import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column aria-labelledby="social-media">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:me@rodrigofernand.es">me@rodrigofernand.es</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav id="social-media">
          <a
            href="https://www.instagram.com/won-games"
            rel="noopenner noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            rel="noopenner noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            rel="noopenner noreferrer"
            target="_blank"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            rel="noopenner noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav id="resources">
          <Link href="/">Home</Link>
          <Link href="/games">Store</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2021 © All Rights Reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
