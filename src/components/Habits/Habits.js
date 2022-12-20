import { HabitsContainer } from './style'
import CardsOfHabits from '../Cardofhabits/Cardofhabits'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../constants/PageContext'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import MyHabits from '../MyHabits/MyHabits'

const Habits = props => {
  const { controller, setController } = props
  const { authToken } = useContext(AuthContext)
  const [habits, setHabits] = useState([])

  const habitsLenght = habits.length

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
    const promise = axios.get(`${BASE_URL}/habits`, config)
    promise.then(res => {
      console.log(res.data)
      setHabits(res.data)
    })
    promise.catch(err => console.log(err))
  }, [controller])

  return (
    <HabitsContainer>
      {habitsLenght === 0 && controller === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : habitsLenght !== 0 && controller === 0 ? (
        <MyHabits
          habits={habits}
          setHabits={setHabits}
          setController={setController}
        />
      ) : habitsLenght === 0 && controller >= 1 ? (
        <>
          <CardsOfHabits setController={setController} setHabits={setHabits} />
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </>
      ) : habitsLenght !== 0 && controller >= 1 ? (
        <CardsOfHabits setController={setController} />
      ) : (
        'Algo está errado'
      )}
    </HabitsContainer>
  )
}

export default Habits
