import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserForm from '../UserForm'
import AmountContainer from '../AmountContainer'
import { SECOND_NATIONS } from '@utils/constants/calculationKey'

const SecondCalculatorBlock = styled.div`
  width: 400px;
  height: 450px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 24px;
  margin-top: 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`

const SecondCalculator = () => {
  const [value, setValue] = useState('')
  const [nation, setNation] = useState(SECOND_NATIONS.USD)

  return (
    <SecondCalculatorBlock>
      <UserForm
        value={value}
        setValue={setValue}
        nation={nation}
        handleNationChange={setNation}
      />
      <AmountContainer amount={value} fromNation={nation} />
    </SecondCalculatorBlock>
  )
}

export default SecondCalculator
