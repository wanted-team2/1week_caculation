import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { addComma, getDate, exchange } from '@utils/functions'
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
  // input으로 들어온 금액을 바꿀 탭 국가(toNation) 생태값
  const [toNation, setToNation] = useState(NATIONS.CAD)
  const [rates, setRates] = useState({})

  // API가 한달에 무료 250번 호출이길래 더미 파일을 만들어서 환율 데이터를 받아옴
  useEffect(async () => {
    const response = await fetch('/dummy.json')
    const data = await response.json()

    // 환율들 포매팅 과정
    // USD : 1
    // KWR : 1197.52343..
    const rates = Object.entries(data.quotes).reduce((rates, [key, value]) => {
      rates[key.replace('USD', '')] = value
      return rates
    }, {})
    setRates(rates)
  }, [])

  useEffect(() => {
    // select에서 fromNation이 바뀔 때 현재 선택한 탭과 같은 나라일 경우 가장 첫 번째 탭으로 포커싱
    if (toNation !== fromNation) {
      // 그렇지 않은경우 아무것도 안함
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
        {/*{5개 국가 탭 만들기}*/}
        {Object.values(NATIONS).map(
          (nation) =>
            // nation !== fromNation 현재 선택된 국가와 렌더링하려는 탭의 국가가 같으면 렌더링하지 않게하는 조건문
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
        {toNation} : {exchange(amount, fromNation, toNation, rates)}
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
