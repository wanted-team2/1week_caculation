import React from 'react'
import { render } from '@testing-library/react'
import { FirstCalculator } from '@components/domain'

test('FirstCalculator', () => {
  const { getByText } = render(<FirstCalculator />)

  // @NOTE: 1번 계산기 로딩 확인
  expect(getByText(/1번 환율 계산기/)).not.toBeNull()
})
