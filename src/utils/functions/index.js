export const addComma = (priceNumber) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')

export const removeComma = (priceString) => priceString.replaceAll(',', '')
