import { MONTH } from '@utils/constants/calculationKey'

export const addCommaSecond = (priceNumber) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')

export const addComma = (number) => {
  return number.toLocaleString('ko-KR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
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

export const checkValidate = (currencyValue, maxValue) => {
  //@NOTE: maxValue를 넣지 않을 경우 세번째 조건 스킵
  if (currencyValue === null || isNaN(currencyValue)) return false
  if (currencyValue < 0) return false
  if (maxValue && currencyValue > maxValue) return false
  if (typeof currencyValue !== 'number') return false
  return true
}
