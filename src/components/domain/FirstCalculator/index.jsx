import React, { useEffect, useRef, useState } from 'react'
import { addComma, checkValidate } from '@utils/functions'
import { NATIONS } from '@utils/constants/calculationKey'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const FirstCalculator = ({ currencyInfo }) => {
  const inputRef = useRef(null)
  const [state, setState] = useState({})
  const [activeCurrency, setActiveCurrency] = useState({})
  const [totalMoney, setTotalMoney] = useState(0)
  const [isGetData, setIsGetData] = useState(false)
  const [isValidate, setIsValidate] = useState(true)

  const handleSelectValue = (e) => {
    const country = e.target.value
    setActiveCurrency({ country, ...state[country] })
    inputRef.current.value = 0
    setTotalMoney(0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (checkValidate(+inputRef.current.value, 10000)) {
      setTotalMoney(inputRef.current.value * +activeCurrency.exchangeRate)
      setIsValidate(true)
    } else setIsValidate(false)
  }

  useEffect(async () => {
    const philippines = currencyInfo?.quotes?.USDPHP
    const japan = currencyInfo?.quotes?.USDJPY
    const korea = currencyInfo?.quotes?.USDKRW

    setState({
      한국: { currency: NATIONS.KRW, exchangeRate: korea },
      필리핀: { currency: NATIONS.PHP, exchangeRate: philippines },
      일본: { currency: NATIONS.JPY, exchangeRate: japan },
    })

    if (!isGetData && currencyInfo) {
      setActiveCurrency({
        country: '한국',
        currency: NATIONS.KRW,
        exchangeRate: korea,
      })
    }

    currencyInfo && setIsGetData(true)
  }, [currencyInfo, isGetData])

  return (
    <>
      <Title>환율 계산</Title>
      <form onSubmit={handleSubmit}>
        <TextWrapper>
          <Label>송금국가</Label>
          <span>미국({NATIONS.USD})</span>
        </TextWrapper>
        <TextWrapper>
          <Label>수취국가</Label>
          <select onChange={handleSelectValue}>
            {Object.entries(state).map(([country, currencyInfo]) => (
              <option key={country} value={country}>
                {country}({currencyInfo.currency})
              </option>
            ))}
          </select>
        </TextWrapper>
        <TextWrapper>
          <Label>환율</Label>
          <span>
            {addComma(+activeCurrency.exchangeRate)} {activeCurrency.currency}/
            {NATIONS.USD}
          </span>
        </TextWrapper>
        <TextWrapper>
          <Label>송금액</Label>
          <input ref={inputRef} type="number" placeholder={0} />
          {NATIONS.USD}
        </TextWrapper>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </form>
      <p>
        수취금액은 {addComma(+totalMoney)} {activeCurrency.currency} 입니다.
      </p>
      {!isValidate && <ErrorText>송금액이 바르지 않습니다.</ErrorText>}
    </>
  )
}

const Title = styled.h1`
  padding: 15px 0;
`

const TextWrapper = styled.div`
  padding: 5px 0;
`

const Label = styled.strong`
  padding-right: 5px;
`

const SubmitBtn = styled.button`
  padding: 5px 80px;
  margin: 8px 0;
  border: 1px solid;
  cursor: pointer;
`

const ErrorText = styled.p`
  color: red;
`

FirstCalculator.propTypes = {
  currencyInfo: PropTypes.object,
}

FirstCalculator.defaultProps = {
  currencyInfo: null,
}

export default FirstCalculator
