import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Contact from '../pages/Contact'
<<<<<<< HEAD
import Home from '../pages/Home'
import Products from '../pages/Products'
import Sustainability from '../pages/Sustainability'

=======
import AboutUs from '../pages/AboutUs'
>>>>>>> f939231a478b216ee304dcb5f1bee55fb19ad652
function Rotate() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
=======
        <Route path="/aboutus" element={<AboutUs />} />
>>>>>>> f939231a478b216ee304dcb5f1bee55fb19ad652
      </Routes>
      <Footer />
    </>
  )
}

export default Rotate
