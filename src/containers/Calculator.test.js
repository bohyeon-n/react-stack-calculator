import Calculator from './Calculator'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

it('Calculator.js: button 1을 click하면 클릭한 데이터가 노출된다.', () => {
  const { getByText, getByTestId } = render(<Calculator />)
  fireEvent.click(getByText('1'))

  const result = getByTestId('result')
  expect(result.innerHTML).toBe('1')
})
