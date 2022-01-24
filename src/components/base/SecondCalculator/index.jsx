import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserForm from '../UserForm'
import AmountContainer from '../AmountContainer'

const SecondCalculatorBlock = styled.div`
  width: 400px;
  height: 450px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`

const SecondCalculator = () => {
  const [value, setValue] = useState('')

  return (
    <SecondCalculatorBlock>
      <UserForm value={value} handleValueChange={setValue} />
      <AmountContainer amount={value} />
    </SecondCalculatorBlock>
  )
}

export default SecondCalculator
