import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../../constants/PageContext'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
const FooterDaysOfWeek = props => {
  const { setController, habitName, isClicked } = props
  const { authToken } = useContext(Context)

  const handleClick = () => {
    setController(0)
  }

  const handleSubmit = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }

    const body = {
      name: habitName,
      days: isClicked.map(e => e + 1)
    }

    const promise = axios.post(`${BASE_URL}/habits`, body, config)
    promise.then(res => console.log(res))
    promise.catch(err => console.log(err))
  }

  return (
    <Footer>
      <h1 onClick={handleClick}>Cancelar</h1>
      <button onClick={handleSubmit}>Salvar</button>
    </Footer>
  )
}

export default FooterDaysOfWeek

const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 23px;
  margin-top: 30px;

  h1 {
    color: #52b6ff;
  }

  button {
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: none;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`
