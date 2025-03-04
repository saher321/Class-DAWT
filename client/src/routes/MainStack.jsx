import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLogin from '../components/AuthLogin'
import AuthRegister from '../components/AuthRegister'
import Home from '../pages/Home'



function MainStack() {
  return (
    <Routes >
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
    </Routes>
  )
}

export default MainStack
