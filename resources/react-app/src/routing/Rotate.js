import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
function Rotate() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Rotate
