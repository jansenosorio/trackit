import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    box-sizing: border-box;
    width: 300px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    ::placeholder {
      box-sizing: border-box;
      line-height: 25px;
      color: #dbdbdb;
      padding: 9px;
    }
  }
  button {
    width: 300px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    :hover {
      transition: all 500ms ease;
      opacity: 0.7;
    }
  }
`
export const Register = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;

  padding-top: 25px;
  padding-bottom: 200px;
`
