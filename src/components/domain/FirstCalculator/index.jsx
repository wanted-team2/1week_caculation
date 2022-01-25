import React, { useEffect, useState } from 'react'
import { addComma } from '@utils/functions'
import { NATIONS } from '@utils/constants/calculationKey'
import styled from '@emotion/styled'
import { FirstCalculatorForm } from '@components/domain'
import PropTypes from 'prop-types'

const FirstCalculator = ({ currencyInfo }) => {
  const [state, setState] = useState({})
  const [activeCurrency, setActiveCurrency] = useState({})
  const [totalMoney, setTotalMoney] = useState(0)
  const [isGetData, setIsGetData] = useState(false)
  const [isValidate, setIsValidate] = useState(true)

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
    <FirstCalculatorBlock>
      <Title>1번 환율 계산기</Title>
      <FirstCalculatorForm
        state={state}
        activeCurrency={activeCurrency}
        setTotalMoney={setTotalMoney}
        setIsValidate={setIsValidate}
        setActiveCurrency={setActiveCurrency}
      />
      <p>
        수취금액은 {addComma(+totalMoney)} {activeCurrency.currency} 입니다.
      </p>
      {!isValidate && <ErrorText>송금액이 바르지 않습니다.</ErrorText>}
    </FirstCalculatorBlock>
  )
}

const Title = styled.h1`
  padding: 15px 0;
`

const ErrorText = styled.p`
  color: red;
`

const FirstCalculatorBlock = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 24px;
  margin-top: 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`

FirstCalculator.propTypes = {
  currencyInfo: PropTypes.object,
}

FirstCalculator.defaultProps = {
  currencyInfo: null,
}

export default FirstCalculator
