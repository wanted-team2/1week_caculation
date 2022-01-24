import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { addComma, getDate } from '@utils/functions'
import PropTypes from 'prop-types'
import { NATIONS } from '@utils/constants'

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

const AmountContainer = ({ amount, fromNation }) => {
  const [toNation, setToNation] = useState(NATIONS.CAD)

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
        {Object.values(NATIONS).map(
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
        {toNation} : {addComma(amount)}
        <br />
        기준일: {getDate()}
      </AmountView>
    </AmountContainerBlock>
  )
}

AmountContainer.propTypes = {
  amount: PropTypes.string,
  fromNation: PropTypes.string,
}

export default AmountContainer
