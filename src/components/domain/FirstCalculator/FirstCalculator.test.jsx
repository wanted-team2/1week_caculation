import React from 'react'

import { render } from '@testing-library/react'

import { FirstCalculator } from '@components/domain'

test('FirstCalculator', () => {
  const { getByText } = render(<FirstCalculator />)

  expect(getByText(/환율 계산/)).not.toBeNull()
})
