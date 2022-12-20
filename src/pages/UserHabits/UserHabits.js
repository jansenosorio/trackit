import React from 'react'
import styled from 'styled-components'
import UserHeader from '../../components/UserHeader/UserHeader'
import Habits from '../../components/Habits/Habits.js'
import UserFooter from '../../components/UserFooter/UserFooter'
import { useState } from 'react'

const UserHabits = () => {
  const [controller, setController] = useState(0)

  return (
    <UserHabitsContainer>
      <UserHeader setController={setController} />
      <Habits controller={controller} setController={setController} />
      <UserFooter />
    </UserHabitsContainer>
  )
}

export default UserHabits

const UserHabitsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding-top: 70px;
  position: absolute;
  background-color: #e5e5e5;
`
