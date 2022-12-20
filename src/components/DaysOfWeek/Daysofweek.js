import { useState } from 'react'
import styled from 'styled-components'

const Daysofweek = props => {
  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
  const { isClicked, setIsClicked, isDisabled } = props

  const handleClick = i => {
    const newArr = [...isClicked]
    if (newArr.includes(i)) {
      const nArr = newArr.filter(e => e !== i)
      setIsClicked(nArr)
      console.log(nArr)
    } else {
      const nArr = [...newArr, i]
      setIsClicked(nArr)
      console.log(nArr)
    }
  }

  return (
    <ButtonsContainer isClicked={isClicked}>
      {days.map((elm, i) => (
        <Buttons
          isClicked={isClicked.includes(i)}
          key={i}
          onClick={() => handleClick(i)}
          data-test="habit-day"
          disabled={isDisabled}
        >
          {elm}
        </Buttons>
      ))}
    </ButtonsContainer>
  )
}

export default Daysofweek

const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 4px;
  margin-top: 6px;
`

const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${props => (props.isClicked ? '#ffffff' : '#dbdbdb')};
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  background-color: ${props => (props.isClicked ? '#CFCFCF' : '#FFFFFF')};
`
