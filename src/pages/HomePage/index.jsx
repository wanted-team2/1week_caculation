import React, { useEffect, useRef, useState } from 'react'
import { useAsync } from '@hooks'
import { getCurrencyApi, getMockData } from '@api' // @NOTE: 임시 mock 데이터 적용

const HomePage = () => {
  const {
    loading,
    error,
    data: currencyInfo,
    execute,
  } = useAsync(getMockData, true)

  const [state, setState] = useState({})
  const [activeCurrency, setActiveCurrency] = useState({})
  const [totalMoney, setTotalMoney] = useState(0)

  const handleSelectValue = (e) => {
    const country = activeCurrency.country
    setActiveCurrency({ country, ...state[country] })
  }

  const handleTotalMoney = (e) => {
    e.preventDefault()
    // console.log(typeof e.target.value)
    console.log(activeCurrency)
    // setTotalMoney(e.target.value * +activeCurrency.exchangeRate)
  }

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
        <select onChange={handleSelectValue}>
          {Object.entries(state).map(([country, currencyInfo]) => (
            <option key={country} value={country}>
              {country}({currencyInfo.currency})
            </option>
          ))}
        </select>
        <strong>환율</strong>
        <span>
          {activeCurrency.exchangeRate} {activeCurrency.currency}/USD
        </span>
        <strong>송금액</strong>
        <input type="number" onChange={handleTotalMoney} />
        USD
        <button type="submit">Submit</button>
      </form>
      <p>{totalMoney}</p>
    </>
  )
}

export default HomePage
