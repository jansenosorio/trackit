import React from 'react'
import { Form, Home } from './style'
import { Link } from 'react-router-dom'

const UserRegistration = () => {
  return (
    <>
      <Form>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="senha"></input>
        <input type="text" placeholder="nome"></input>
        <input type="text" placeholder="foto"></input>
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">
        <Home>Já tem uma conta? Faça login!</Home>
      </Link>
    </>
  )
}

export default UserRegistration
