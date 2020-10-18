import React from 'react'
import { cleanup, render } from '@testing-library/react'

import App from './App'

afterEach(cleanup)

it('App.js: 계산기가 노출된다.', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('계산기')).toBeInTheDocument()
})
