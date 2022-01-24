import React from 'react'
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
`
const AmountView = styled.div`
  padding: 24px;
`

const AmountContainer = ({ amount, currentNation }) => {
  return (
    <AmountContainerBlock>
      <AmountHeader>
        {Object.values(NATIONS).map(
          (nation) =>
            nation !== currentNation && (
              <HeaderTap key={nation} value={nation}>
                {nation}
              </HeaderTap>
            ),
        )}
      </AmountHeader>
      <AmountView>
        {currentNation} : {addComma(amount)}
        <br />
        기준일: {getDate()}
      </AmountView>
    </AmountContainerBlock>
  )
}

AmountContainer.propTypes = {
  amount: PropTypes.string,
  currentNation: PropTypes.string,
}

export default AmountContainer
