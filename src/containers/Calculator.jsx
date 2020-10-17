import React from 'react'
import { KeyPad } from '../components/KeyPad'
import { ResultDisplay } from '../components/ResultDisplay'

const Calculator = () => {
  return (
    <div>
      <ResultDisplay result={1} />
      <KeyPad />
    </div>
  )
}

export default Calculator
