import React from 'react'
import styled from 'styled-components'
import { keys } from '../util/key'

const KeyPadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const KeyButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
`

export const KeyPad = ({ onClickKey }) => {
  return (
    <KeyPadWrapper>
      {keys.map(key => (
        <KeyButton
          key={key.name}
          className="key"
          name={key.name}
          onClick={e => onClickKey(key)}
        >
          {key.display}
        </KeyButton>
      ))}
    </KeyPadWrapper>
  )
}
