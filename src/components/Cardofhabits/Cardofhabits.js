import Daysofweek from '../DaysOfWeek/Daysofweek'
import FooterDaysOfWeek from '../FooterDaysOfWeek/FooterDaysOfWeek'
import { useState } from 'react'
import { Cards } from './style'

const CardsOfHabits = props => {
  const [habitName, setHabitName] = useState()
  const [isClicked, setIsClicked] = useState([])
  const { setController } = props

  return (
    <Cards>
      <input
        type="text"
        placeholder="nome do hábito"
        value={habitName}
        onChange={e => setHabitName(e.target.value)}
      ></input>
      <Daysofweek isClicked={isClicked} setIsClicked={setIsClicked} />
      <FooterDaysOfWeek
        habitName={habitName}
        isClicked={isClicked}
        setController={setController}
      />
    </Cards>
  )
}

export default CardsOfHabits
