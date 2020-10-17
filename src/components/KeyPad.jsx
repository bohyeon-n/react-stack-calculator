import React from 'react'
import styled from 'styled-components'
import { keys } from '../util/key'

export const KeyPad = () => {
  return (
    <div className="keypad">
      {keys.map(key => (
        <button key={key.name} className="key" name={key.name}>
          {key.display}
        </button>
      ))}
    </div>
  )
}
