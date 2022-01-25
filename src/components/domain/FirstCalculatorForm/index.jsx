import React, { useRef } from 'react'
import { NATIONS } from '@utils/constants/calculationKey'
import { addComma, checkValidate } from '@utils/functions'
import styled from '@emotion/styled'

const FirstCalculatorForm = ({
  state,
  activeCurrency,
  setTotalMoney,
  setIsValidate,
  setActiveCurrency,
}) => {
  const inputRef = useRef(null)

  const handleSelectValue = (e) => {
    const country = e.target.value
    setActiveCurrency({ country, ...state[country] })
    inputRef.current.value = ''
    setTotalMoney('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // @NOTE: validation 체크
    if (checkValidate(+inputRef.current.value, 10000)) {
      setTotalMoney(inputRef.current.value * +activeCurrency.exchangeRate)
      setIsValidate(true)
    } else setIsValidate(false)

    // @NOTE: 송금액 왼쪽 0 제거
    inputRef.current.value = +inputRef.current.value.replace(/^0+/, '')
  }

  return (
    <>
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
    </>
  )
}

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

export default React.memo(FirstCalculatorForm)
