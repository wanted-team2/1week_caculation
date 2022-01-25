import React from 'react'
import styled from '@emotion/styled'
import { getDate, exchange, formatFloat } from '@utils/functions'
import PropTypes from 'prop-types'
import { SECOND_NATIONS } from '@utils/constants/calculationKey'
import useAmount from './useAmount'

const AmountContainer = ({ amount, fromNation, currencyInfo }) => {
  const { toNation, setToNation, rates, date } = useAmount({
    currencyInfo,
    fromNation,
  })

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
                className={`tab ${toNation === nation ? 'active' : ''}`}
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
  border-right: 1px solid black;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  &.active {
    border-bottom: none;
  }
  &:last-child {
    border-right: none;
  }
`
const AmountView = styled.div`
  padding: 24px;
`

AmountContainer.propTypes = {
  amount: PropTypes.string,
  fromNation: PropTypes.string,
  currencyInfo: PropTypes.object,
}

export default AmountContainer
