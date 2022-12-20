import styled from 'styled-components'
import { Trash } from '@styled-icons/bootstrap/Trash'
import { useContext } from 'react'
import AuthContext from '../../constants/PageContext'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { configure } from '@testing-library/react'

const MyHabits = props => {
  const day = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
  const { habits, setHabits, setController } = props
  const { authToken } = useContext(AuthContext)

  const handleClick = id => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }

    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config)
    promise.then(res => {
      axios
        .get(`${BASE_URL}/habits/`, config)
        .then(res => {
          setHabits(res.data)
          setController(0)
        })
        .catch(err => console.log(err))
    })
    promise.catch(err => console.log(err))
  }

  return (
    <>
      {habits.map(e => (
        <ContainerMyHabits key={e.id} data-test="habit-container">
          <div>
            <h1 data-test="habit-name">{e.name}</h1>
            <ContainerButtons>
              {day.map((elm, index) => (
                <Buttons
                  color={e.days.includes(index + 1)}
                  data-test="habit-day"
                >
                  {elm}
                </Buttons>
              ))}
            </ContainerButtons>
          </div>
          <IconTrash onClick={() => handleClick(e.id)} />
        </ContainerMyHabits>
      ))}
    </>
  )
}

export default MyHabits

const ContainerMyHabits = styled.div`
  box-sizing: border-box;
  width: 345px;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 10px auto;
  padding: 15px;

  h1 {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
  }
`

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 8px auto;
`

const Buttons = styled.button`
  font-size: 20px;
  color: ${props => (props.color ? '#ffffff' : '#dbdbdb')};
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  background-color: ${props => (props.color ? '#CFCFCF' : '#FFFFFF')};
`

const IconTrash = styled(Trash)`
  width: 13px;
  height: 15px;
  padding-bottom: 45px;
`
