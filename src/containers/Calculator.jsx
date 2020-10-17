import React, { useState } from 'react'
import { KeyPad } from '../components/KeyPad'
import { ResultDisplay } from '../components/ResultDisplay'
import { calculate } from '../util/calculate'
import styled from 'styled-components'

const CalculatorWrapper = styled.div`
  width: 200px;
  margin: auto;
`
const Calculator = () => {
  const [expression, setExpression] = useState('')
  const [display, setDisplay] = useState('')

  const onClickKey = key => {
    switch (key.name) {
      case 'CE':
        onDelete()
        break
      case 'C':
        onReset()
        break
      case '=':
        onCalculate()
        break
      default:
        onUpdate(key)
    }
  }

  const onDelete = () => {
    setExpression(expression.slice(0, -1))
    setDisplay(display.slice(0, -1))
  }

  const onReset = () => {
    setExpression('')
    setDisplay('')
  }

  const onCalculate = () => {
    const result = String(calculate(expression))
    setExpression(result)
    setDisplay(result)
  }

  const onUpdate = key => {
    setExpression(expression + key.name)
    setDisplay(display + key.display)
  }

  return (
    <CalculatorWrapper>
      <ResultDisplay result={display} />
      <KeyPad onClickKey={onClickKey} />
    </CalculatorWrapper>
  )
}

export default Calculator
