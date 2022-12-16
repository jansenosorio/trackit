import React from 'react'
import styled from 'styled-components'
import UserHeader from '../../components/UserHeader/UserHeader'

const UserHabits = () => {
  return (
    <UserHabitsContainer>
      <UserHeader />
    </UserHabitsContainer>
  )
}

export default UserHabits

const UserHabitsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`
