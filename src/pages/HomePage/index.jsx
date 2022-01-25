import React from 'react'
import { useAsync } from '@hooks'
import { getCurrencyApi, getMockData } from '@api'
import { FirstCalculator } from '@components/domain'
import { SecondCalculator } from '@components/base'
import styled from '@emotion/styled'

const HomePage = () => {
  const {
    loading,
    error,
    data: currencyInfo,
    execute,
  } = useAsync(getCurrencyApi, true) // @NOTE: API 요청 리미트 250회가 넘으면 getMockApi로 변경

  return (
    <HomePageBlock>
      <FirstCalculator currencyInfo={currencyInfo} />
      <SecondCalculator currencyInfo={currencyInfo} />
    </HomePageBlock>
  )
}

const HomePageBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default HomePage
