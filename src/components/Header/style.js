import styled from 'styled-components'

export const LogoBar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #126ba5;
  gap: 220px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  img:nth-child(1) {
    width: 100px;
    height: 50px;
  }
  img:nth-child(2) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`
