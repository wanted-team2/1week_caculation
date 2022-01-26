import React from 'react'
import { render } from '@testing-library/react'
import { FirstCalculatorForm } from '@components/domain'
import { NATIONS } from '@utils/constants/calculationKey'

test('FirstCalculatorForm', () => {
  // @NOTE: JSON dummy date 생성
  const philippines = 51.301234
  const japan = 113.747497
  const korea = 1195.755008

  const state = {
    한국: { currency: NATIONS.KRW, exchangeRate: korea },
    필리핀: { currency: NATIONS.PHP, exchangeRate: philippines },
    일본: { currency: NATIONS.JPY, exchangeRate: japan },
  }
  const activeCurrency = {
    country: '한국',
    currency: NATIONS.KRW,
    exchangeRate: korea,
  }
  // @NOTE: 모의 함수 설정
  const handleSubmit = jest.fn()
  const handleSelectValue = jest.fn()

  const { getByText, getByDisplayValue } = render(
    <FirstCalculatorForm
      state={state}
      onSubmit={handleSubmit}
      onChange={handleSelectValue}
      activeCurrency={activeCurrency}
    />,
  )
  // @NOTE: FirstCalculatorFrom 로딩 확인
  expect(getByText(/수취국가/)).not.toBeNull()

  // @NOTE: select option 확인
  expect(getByDisplayValue('한국(KRW)')).not.toBeNull()

  // @NOTE: Submit 확인
  expect(getByText(/Submit/)).not.toBeNull()
})
