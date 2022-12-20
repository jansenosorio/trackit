import React, { useContext } from 'react'
import { Form, Register } from './style.js'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios'
import PageContext from '../../constants/PageContext.js'

const Login = () => {
  const { setUserToken } = useContext(PageContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate('/habitos')

  const handleSubmit = e => {
    e.preventDefault()
    const body = { email: email, password: password }
    setIsDisabled(true)

    if (email === '' || password === '') {
      alert('Favor inserir seus dados!')
      setIsDisabled(false)
    } else {
      const promise = axios.post(`${BASE_URL}/auth/login`, body)
      promise.then(res => {
        console.log(res)
        setUserToken(res.data)
        if (res.status === 200) {
          navigate('/habitos')
        }
      })
      promise.catch(err => {
        alert(err.response.data.message)
        setIsDisabled(false)
      })
    }
  }

  return (
    <>
      <Form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
          disabled={isDisabled}
          data-test="email-input"
        ></input>
        <input
          type="text"
          placeholder="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isDisabled}
          data-test="password-input"
        ></input>
        <button type="submit" data-test="login-btn" disabled={isDisabled}>
          {isDisabled ? (
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            'Entrar'
          )}
        </button>
      </Form>
      <Link to="/cadastro" data-test="signup-link">
        <Register>Não tem uma conta? Cadastre-se!</Register>
      </Link>
    </>
  )
}

export default Login
