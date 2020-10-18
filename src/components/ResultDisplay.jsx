import React from 'react'
import styled from 'styled-components'

const Display = styled.div`
  width: 100%;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  background: gray;
  overflow: scroll;
`

export const ResultDisplay = ({ result }) => {
  return <Display data-testid="result">{result}</Display>
}
