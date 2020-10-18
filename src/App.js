import React, { useState } from 'react'
import './App.css'
import Calculator from './containers/Calculator'

function App() {
  const [username, setUsername] = useState('')

  const fetchData = async () => {
    const response = await fetch(
      `https://e6e2c81c-c22b-48cf-9e42-fd4cfd887b17.mock.pstmn.io/username`
    )

    const data = await response.json()

    setUsername(data.username)
  }

  const onClickBtn = () => {
    fetchData()
  }

  return (
    <div className="App">
      <h1>계산기</h1>
      <button onClick={e => onClickBtn()}>loading user</button>
      <div>{username}</div>
      <Calculator />
    </div>
  )
}

export default App
