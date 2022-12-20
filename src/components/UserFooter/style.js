import styled from 'styled-components'

export const Footer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  div:nth-child(1) {
    color: #52b6ff;
    cursor: pointer;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: #52b6ff;
    color: white;
    border-radius: 50%;
    margin-bottom: 50px;
    cursor: pointer;
  }
  div:nth-child(3) {
    color: #52b6ff;
    cursor: pointer;
  }
`
