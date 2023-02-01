import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sustainability from '../pages/Sustainability'
import Header from '../components/header/Header'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'
function Rotate() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/s" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default Rotate
