import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { getDate, exchange, formatFloat } from '@utils/functions'
import PropTypes from 'prop-types'
import { SECOND_NATIONS } from '@utils/constants/calculationKey'

const AmountContainerBlock = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 30px;

  border: 1px solid black;
`
const AmountHeader = styled.ul`
  display: flex;
  width: 100%;
`
const HeaderTap = styled.li`
  width: 100%;
  border-bottom: 1px solid black;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`
const AmountView = styled.div`
  padding: 24px;
`

const AmountContainer = ({ amount, fromNation, currencyInfo }) => {
  const [toNation, setToNation] = useState(SECOND_NATIONS.CAD)
  const [rates, setRates] = useState({})
  const [date, setDate] = useState('')

  useEffect(() => {
    if (!currencyInfo.currencyInfo) {
      return
    }
    const { quotes } = currencyInfo.currencyInfo
    const rates = Object.entries(quotes).reduce((rates, [key, value]) => {
      rates[key.replace('USD', '')] = value
      return rates
    }, {})
    setRates(rates)
    setDate(currencyInfo.currencyInfo.timestamp)
  }, [currencyInfo])

  useEffect(() => {
    if (toNation !== fromNation) {
      return
    }
    const firstNation = document.querySelector('.tab').innerHTML
    setToNation(firstNation)
  }, [fromNation])

  const handleClick = (e) => {
    setToNation(e.target.innerHTML)
  }

  return (
    <AmountContainerBlock>
      <AmountHeader>
        {Object.values(SECOND_NATIONS).map(
          (nation) =>
            nation !== fromNation && (
              <HeaderTap
                onClick={handleClick}
                className={'tab'}
                key={nation}
                value={nation}
              >
                {nation}
              </HeaderTap>
            ),
        )}
      </AmountHeader>
      <AmountView>
        {toNation} :{' '}
        {formatFloat(exchange(amount, fromNation, toNation, rates))}
        <br />
        기준일: {getDate(date)}
      </AmountView>
    </AmountContainerBlock>
  )
}

AmountContainer.propTypes = {
  amount: PropTypes.string,
  fromNation: PropTypes.string,
  currencyInfo: PropTypes.object,
}

export default AmountContainer
