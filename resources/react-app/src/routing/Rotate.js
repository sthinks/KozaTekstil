import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/header'
import Sustainability from '../pages/Sustainability'

function Rotate() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/sustainability" element={<Sustainability />} />
    </Routes>
    </>
  )
}

export default Rotate
