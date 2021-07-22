import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cardItems',
      JSON.stringify(['1', '2'])
    )
    expect(getStorageItem('cardItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should add the item from localStorage', () => {
    setStorageItem('cardItems', ['1', '2'])

    expect(window.localStorage.getItem('WONGAMES_cardItems')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
