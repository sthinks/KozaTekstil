import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Logo from "../../assets/header/logo.png"
const Footer = () => {
    return (
        <footer className='bg-[#F5F5F5] py-24'>
            <div className='container mx-auto max-sm:px-5'>
                <div className='flex max-sm:flex-col'>
                    <div className='flex-[2_2_0] sm:flex sm:justify-center'>
                        <div className='inline-block'>
                            <h4 className='text-brand text-2xl font-extrabold'>Follow Us</h4>
                            <div className='flex mt-5'>
                                <FaInstagramSquare className='text-brand text-2xl max-md:mr-2' />
                                <FaFacebookSquare className='text-brand text-2xl max-md:mr-2' />
                                <FaLinkedin className='text-brand text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 max-sm:mt-4'>
                        <h4 className='text-brand text-2xl font-extrabold'>Company</h4>
                        <ul className='text-brand'>
                            <li className='py-2'>
                                <a href='/about-us'>About Us</a>
                            </li>
                            <li className='py-2'>
                                <a href='/about-us'>Our Goals & Values</a>
                            </li>
                            <li className='py-2'>
                                <a href='/about-us'>Production</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1 max-sm:mt-4'>
                        <h4 className='text-brand text-2xl font-extrabold'>Products</h4>
                        <ul className='text-brand'>
                            <li className='py-2'>
                                <a href='/products'>Viscose Fabrics</a>
                            </li>
                            <li className='py-2'>
                                <a href='/products'>Polyester Fabrics</a>
                            </li>
                            <li className='py-2'>
                                <a href='/products'>Viscose/Linen Blends</a>
                            </li>
                            <li className='py-2'>
                                <a href='/products'>Cotton/Linen Blends</a>
                            </li>
                            <li className='py-2'>
                                <a href='/products'>Cotton/Polyester Blends</a>
                            </li>
                            <li className='py-2'>
                                <a href='/products'>PA and Blends</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1 max-sm:mt-4'>
                        <h4 className='text-brand text-2xl font-extrabold'>Contact Us</h4>
                        <ul className='text-brand'>
                            <li className='py-2'>
                                <a href='/contact'>Get In Touch</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-[2_2_0] sm:flex sm:justify-center sm:items-center max-sm:mt-4'>
                        <img src={Logo} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer