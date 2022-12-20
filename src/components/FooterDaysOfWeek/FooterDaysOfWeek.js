import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../../constants/PageContext'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { ThreeDots } from 'react-loader-spinner'

const FooterDaysOfWeek = props => {
  const {
    setController,
    habitName,
    isClicked,
    isDisabled,
    setIsDisabled,
    setHabits
  } = props
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
    promise.then(res => {
      setIsDisabled(true)
      setController(0)
    })
    promise.catch(err => {
      alert(err.response)
      setIsDisabled(false)
    })
  }

  return (
    <Footer>
      <button
        disabled={isDisabled}
        onClick={handleClick}
        data-test="habit-create-cancel-btn"
      >
        Cancelar
      </button>
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        data-test="habit-create-save-btn"
      >
        {isDisabled ? (
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : (
          'Salvar'
        )}
      </button>
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

    display: flex;
    align-items: center;
    justify-content: center;

    :nth-child(1) {
      background-color: white;
      color: #52b6ff;
    }
  }
`
