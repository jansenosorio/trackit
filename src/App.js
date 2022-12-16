import React, { useContext } from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import styled from 'styled-components'
import UserInterface from './components/UserInterface/UserInterface'
import { useState } from 'react'
import PageContext from './constants/PageContext'

function App() {
  const [userToken, setUserToken] = useState(null)
  return (
    <MainContainer>
      <PageContext.Provider value={(setUserToken, userToken)}>
        {userToken !== null ? <UserInterface /> : <LoginScreen />}
      </PageContext.Provider>
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
