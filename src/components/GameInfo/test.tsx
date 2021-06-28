import { screen } from '@testing-library/react'

import { renderWithTheme } from './../../utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'My Game Description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My Game Title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$210.00/i)).toBeInTheDocument()
    expect(screen.getByText(/My Game Description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Wishlist/i })
    ).toBeInTheDocument()
  })
})