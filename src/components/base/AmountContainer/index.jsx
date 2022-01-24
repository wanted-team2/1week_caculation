import React from 'react'
import styled from '@emotion/styled'
import { addComma } from '../../../utils/functions'
import PropTypes from 'prop-types'

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

const AmountContainer = ({ amount }) => {
  return (
    <AmountContainerBlock>
      <AmountHeader>
        <HeaderTap>1</HeaderTap>
        <HeaderTap>2</HeaderTap>
        <HeaderTap>3</HeaderTap>
        <HeaderTap>4</HeaderTap>
        <HeaderTap>5</HeaderTap>
      </AmountHeader>
      <AmountView>
        {addComma(amount)}
        <br />
        기준일:
      </AmountView>
    </AmountContainerBlock>
  )
}

AmountContainer.propTypes = {
  amount: PropTypes.string,
}

export default AmountContainer
