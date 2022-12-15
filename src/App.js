import React from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import styled from 'styled-components'

function App() {
  return (
    <MainContainer>
      <LoginScreen />
    </MainContainer>
  )
}

export default App

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
