import React from 'react'
import LogoKoza from '../../assets/header/KozaTekstil.png'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  navbar-full font-semibold">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <p className="text-black">
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-black rounded md:p-0"
              aria-current="page"
            >
              About Us
            </Link>
          </p>
          <Link
            to="#"
            className="navbar-link block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
            aria-current="page"
          >
            Products
          </Link>
          <Link to="navbar-link" className="flex items-center">
            <img
              src={LogoKoza}
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
          </Link>
          <Link
            to="#"
            className="navbar-link block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
            aria-current="page"
          >
            Sustainability
          </Link>
          <Link
            to="/contact"
            className="navbar-link block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
            aria-current="page"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}
