import * as S from './styles'
import Heading from 'components/Heading'
import Logo from 'components/Logo'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo />

        <Heading>All your favorite games in one place</Heading>
        <S.SubTitle>
          <strong>WON</strong> is the best and most complete gaming platform
        </S.SubTitle>

        <S.Footer>Wow games 2020. Games in the play now.</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
