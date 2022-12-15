import React from 'react'
import { Form, Register } from './style.js'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <Form>
        <input id="email" type="text" placeholder="email"></input>
        <input id="password" type="text" placeholder="senha"></input>
        <button type="submit">Entrar</button>
      </Form>
      <Link to="/cadastro">
        <Register>Não tem uma conta? Cadastre-se!</Register>
      </Link>
    </>
  )
}

export default Login
