import React from 'react'
import { useAsync } from '@hooks'
import { getCurrencyApi, getMockData } from '@api' // @NOTE: 임시 mock 데이터 적용
import { FirstCalculator } from '@components/domain'
import { SecondCalculator } from '@components/base'
import styled from '@emotion/styled'

// @NOTE: input 값 - 방지
// @NOTE: onChange 일어나면 value = 0 -> 0 없애주는 처리

const HomePage = () => {
  const {
    loading,
    error,
    data: currencyInfo,
    execute,
  } = useAsync(getMockData, true)

  return (
    <>
      <FirstCalculator currencyInfo={currencyInfo} />
      <SecondCalculator className={'second'} />
    </>
  )
}

export default HomePage
