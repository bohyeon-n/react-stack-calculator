import React from 'react'
import {
  cleanup,
  render,
  fireEvent,
  waitForElement
} from '@testing-library/react'

import App from './App'

afterEach(cleanup)

it('App.js: 계산기가 노출된다.', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('계산기')).toBeInTheDocument()
})

it('App.js: button을 click하면 사용자 이름이 노출된다.', async () => {
  //given
  const result = {
    username: 'stranger'
  }

  //when
  const { getByText } = render(<App />)
  fireEvent.click(getByText('loading user'))

  //then
  await waitForElement(() => getByText(result.username))
})
