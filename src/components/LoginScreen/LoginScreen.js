import React from 'react'
import Login from '../../pages/Login/Login.js'
import Logo from '../Logo/Logo.js'
import UserRegistration from '../../pages/UserRegistration/UserRegistration.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<UserRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default LoginScreen
