import { addComma } from '@utils/functions'
import styled from '@emotion/styled'

const FirstCalculatorInfo = ({ totalMoney, activeCurrency, isValidate }) => {
  return (
    <InfoContainer>
      <p>
        수취금액은 {addComma(+totalMoney)} {activeCurrency.currency} 입니다.
      </p>
      {!isValidate && <ErrorText>송금액이 바르지 않습니다.</ErrorText>}
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  padding: 2px;
`

export default FirstCalculatorInfo
