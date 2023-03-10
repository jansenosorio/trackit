import { Header } from './style'

const UserHeader = props => {
  const { setController } = props

  const handleClick = () => {
    setController(1)
  }

  return (
    <Header>
      <h1>Meus Hábitos</h1>
      <button onClick={handleClick} data-test="habit-create-btn">
        +
      </button>
    </Header>
  )
}

export default UserHeader
