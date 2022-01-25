import { MONTH } from '../constants'

// 정규표현식으로 ,추가
export const addComma = (priceNumber) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')

export const removeComma = (priceString) => priceString.replaceAll(',', '')

// Date객체에서 2022-Jan-05 형식으로 리턴
export const getDate = () => {
  const date = new Date()
  // getMonth는 0~11이라 MONTH 배열에서 Jan과 같은 문자열 불러옴
  return `${date.getUTCFullYear()}-${MONTH[date.getMonth()]}-${date.getDate()}`
}

export const exchange = (price, from, to, rates) => {
  if (!Object.entries(rates).length) {
    return
  }
  return ((price / rates[from]) * rates[to]).toFixed(2)
}
