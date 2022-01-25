import React, { useEffect, useRef, useState } from 'react'
import { useAsync } from '@hooks'
import { getCurrencyApi } from '@api'

const HomePage = () => {
  const {
    loading,
    error,
    data: currencyInfo,
    execute,
  } = useAsync(getCurrencyApi, true)

  const [state, setState] = useState({})
  const [activeCurrency, setActiveCurrency] = useState({})

  const handleSelectValue = (e) => {
    setActiveCurrency(e.target.value)
  }

  useEffect(() => {
    console.log(activeCurrency, 'activeCurrency')
  }, [activeCurrency])

  useEffect(async () => {
    const philippines = currencyInfo?.quotes.USDPHP
    const japan = currencyInfo?.quotes.USDJPY
    const korea = currencyInfo?.quotes.USDKRW

    setState({
      한국: { currency: 'KRW', exchangeRate: korea },
      필리핀: { currency: 'PHP', exchangeRate: philippines },
      일본: { currency: 'JPY', exchangeRate: japan },
    })
  }, [currencyInfo])

  return (
    <>
      <h1>환율 계산</h1>
      <form action="">
        <strong>송금국가</strong>
        <span>미국(USD)</span>
        <strong>수취국가</strong>
        <select name="" id="" onChange={handleSelectValue}>
          {Object.entries(state).map(([country, currencyInfo]) => (
            <option key={country} value={country}>
              {country}({currencyInfo.currency})
            </option>
          ))}
        </select>
        <strong>환율</strong>
        {/* <span>{activeCurrency.exchangeRate}</span> */}
        <strong>송금액</strong>
        <input type="number" />
        USD
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default HomePage
