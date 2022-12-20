import { HabitsContainer } from './style'
import CardsOfHabits from '../Cardofhabits/Cardofhabits'

const Habits = props => {
  const { controller, setController } = props

  return (
    <HabitsContainer>
      {controller === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        <>
          <CardsOfHabits setController={setController} />
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </>
      )}
    </HabitsContainer>
  )
}

export default Habits
