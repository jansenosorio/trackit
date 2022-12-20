import LoginScreen from './pages/LoginScreen/LoginScreen'
import styled from 'styled-components'
import UserRegistration from './pages/UserRegistration/UserRegistration'
import { useState } from 'react'
import PageContext from './constants/PageContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserInterface from './pages/UserInterface/UserInterface'

function App() {
  const [userToken, setUserToken] = useState('')
  const authToken = userToken.token
  return (
    <MainContainer>
      <PageContext.Provider value={{ setUserToken, userToken, authToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastro" element={<UserRegistration />} />
            <Route path="/habitos" element={<UserInterface />} />
          </Routes>
        </BrowserRouter>
      </PageContext.Provider>
    </MainContainer>
  )
}

// {userToken !== '' ? <UserInterface /> : }

export default App

const MainContainer = styled.main`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`
