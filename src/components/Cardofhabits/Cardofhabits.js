import Daysofweek from '../DaysOfWeek/Daysofweek'
import FooterDaysOfWeek from '../FooterDaysOfWeek/FooterDaysOfWeek'
import { useState } from 'react'
import { Cards } from './style'

const CardsOfHabits = props => {
  const [habitName, setHabitName] = useState()
  const [isClicked, setIsClicked] = useState([])
  const { setController, setHabits } = props
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <Cards data-test="habit-create-container">
      <input
        type="text"
        placeholder="nome do hábito"
        value={habitName}
        onChange={e => setHabitName(e.target.value)}
        disabled={isDisabled}
        data-test="habit-name-input"
      ></input>
      <Daysofweek
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isDisabled={isDisabled}
      />
      <FooterDaysOfWeek
        habitName={habitName}
        isClicked={isClicked}
        setController={setController}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        setHabits={setHabits}
      />
    </Cards>
  )
}

export default CardsOfHabits
