import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sustainability from '../pages/Sustainability'
import Header from "../components/header/Header"
function Rotate() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/s" element={<Sustainability />} />
      </Routes>
    </>
  )
}

export default Rotate
