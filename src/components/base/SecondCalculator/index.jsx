import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserForm from '../UserForm'
import AmountContainer from '../AmountContainer'
import { NATIONS } from '@utils/constants'

const SecondCalculatorBlock = styled.div`
  width: 400px;
  height: 450px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`

const SecondCalculator = () => {
  // 유저 금액 입력 상태값
  const [value, setValue] = useState('0')
  // 유저가 입력할 변환하기 전의 from 국가 상태값
  const [nation, setNation] = useState(NATIONS.USD)

  return (
    <SecondCalculatorBlock>
      <UserForm
        value={value}
        handleValueChange={setValue}
        nation={nation}
        handleNationChange={setNation}
      />
      <AmountContainer amount={value} fromNation={nation} />
    </SecondCalculatorBlock>
  )
}

export default SecondCalculator
