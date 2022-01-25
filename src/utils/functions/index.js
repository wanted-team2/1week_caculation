import { MONTH } from '@utils/constants/calculationKey'

// export const addComma = (priceNumber) =>
//   priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')

export const addComma = (number) => {
  return number.toLocaleString('ko-KR')
}

export const putZeroLastTwo = (number) => {
  return number.toFixed(2)
}

export const removeComma = (priceString) => priceString.replaceAll(',', '')

export const getDate = () => {
  const date = new Date()
  return `${date.getUTCFullYear()}-${MONTH[date.getMonth()]}-${date.getDate()}`
}

export const exchange = (price, from, to, rates) => {
  if (!Object.entries(rates).length) {
    return
  }
  return ((price / rates[from]) * rates[to]).toFixed(2)
}
