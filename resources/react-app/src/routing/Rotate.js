import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Sustainability from '../pages/Sustainability'

import AboutUs from '../pages/AboutUs'
function Rotate() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Rotate
