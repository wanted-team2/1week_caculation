import { MONTH } from '../constants'

export const addComma = (priceNumber) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')

export const removeComma = (priceString) => priceString.replaceAll(',', '')

export const getDate = () => {
  const date = new Date()
  return `${date.getUTCFullYear()}-${MONTH[date.getMonth()]}-${date.getDate()}`
}
