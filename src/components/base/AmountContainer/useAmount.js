import { useEffect, useState } from 'react'
import { SECOND_NATIONS } from '@utils/constants/calculationKey'

const useAmount = ({ currencyInfo, fromNation }) => {
  const [toNation, setToNation] = useState(SECOND_NATIONS.CAD)
  const [rates, setRates] = useState({})
  const [date, setDate] = useState('')

  useEffect(() => {
    if (!currencyInfo.currencyInfo) {
      return
    }
    const { quotes, timestamp } = currencyInfo.currencyInfo
    const rates = Object.entries(quotes).reduce((rates, [key, value]) => {
      rates[key.replace('USD', '')] = value
      return rates
    }, {})
    setRates(rates)
    setDate(timestamp)
  }, [currencyInfo])

  useEffect(() => {
    if (toNation !== fromNation) {
      return
    }
    const firstNation = document.querySelector('.tab').innerHTML
    setToNation(firstNation)
  }, [fromNation])

  return { toNation, rates, date, setToNation }
}

export default useAmount
