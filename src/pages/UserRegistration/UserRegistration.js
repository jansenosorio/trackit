import React, { useState } from 'react'
import { Form, Home } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

const UserRegistration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const body = { email, name, image, password }
    setIsDisabled(true)
    if (email === '' || password === '' || name === '' || image === '') {
      alert('Favor preencher todos os campos')
    } else {
      axios
        .post(`${BASE_URL}/auth/sign-up`, body)
        .then(res => {
          console.log(res.data)
          navigate('/')
        })
        .catch(err => {
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
          placeholder="email"
          value={email}
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
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={isDisabled}
          data-test="user-name-input"
        ></input>
        <input
          type="text"
          placeholder="foto"
          value={image}
          onChange={e => setImage(e.target.value)}
          disabled={isDisabled}
          data-test="user-image-input"
        ></input>
        <button type="submit" disabled={isDisabled} data-test="signup-btn">
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
            'Cadastrar'
          )}
        </button>
      </Form>
      <Link to="/" data-test="login-link">
        <Home>Já tem uma conta? Faça login!</Home>
      </Link>
    </>
  )
}

export default UserRegistration
