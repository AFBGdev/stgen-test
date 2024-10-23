export const toCurrencyString = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export const getFromLocalStorage = (key: string) => {
  const localStorageValue = window.localStorage.getItem(key)

  if (!localStorageValue) {
    return null
  }

  return JSON.parse(localStorageValue)
}
