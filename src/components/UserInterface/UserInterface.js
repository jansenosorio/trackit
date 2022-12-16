import React from 'react'
import styled from 'styled-components'
import UserHabits from '../../pages/UserHabits/UserHabits'
import Header from '../Header/Header'

const UserInterface = () => {
  return (
    <UserCotainer>
      <Header />
      <UserHabits />
    </UserCotainer>
  )
}

export default UserInterface

const UserCotainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lexend Deca', sans-serif;
`
