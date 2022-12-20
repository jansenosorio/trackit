import styled from 'styled-components'

export const Cards = styled.div`
  box-sizing: border-box;
  padding: 18px;
  width: 380px;
  height: 180px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  div {
    display: flex;
  }

  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-right: 35px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }

  input::placeholder {
    color: #dbdbdb;
    padding-left: 10px;
  }
`
