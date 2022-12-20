import { LogoBar } from './style'
import userlogo from '../../assets/userlogo.svg'
import { useContext } from 'react'
import PageContext from '../../constants/PageContext'

const Header = () => {
  const { userToken } = useContext(PageContext)
  return (
    <LogoBar>
      <img src={userlogo} />
      <img src={userToken.image} />
    </LogoBar>
  )
}

export default Header
