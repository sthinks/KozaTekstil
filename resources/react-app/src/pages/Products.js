import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Banner from '../assets/products/products-banner.png'
import Image01 from '../assets/products/10.png'
import Image02 from '../assets/products/12.png'
import Image03 from '../assets/products/13.png'
import Image04 from '../assets/products/14.png'
import Image05 from '../assets/products/15.png'
import Image06 from '../assets/products/16.png'

const Products = () => {
    return (
        <div>
            <div className='relative flex items-center justify-center'>
                <div className='bg-[#000] opacity-40 absolute h-full w-full left-0 top-0' />
                <div className='absolute text-center'>
                    <h1 className='font-bold text-5xl text-[#fff]'>PRODUCTS</h1>
                    <span className='text-[#fff]'>
                        KOZA supplies wide range of fabrics with different fibers and contents as per trends <br />
                        and customer needs. Fabric performances should meet the demands of modern life.
                    </span>
                </div>
                <img src={Banner} className="w-full h-auto" alt='' />
            </div>
            <div className='container mx-auto'>
                <div className='py-10'>
                    <div className='text-center'>
                        <p className='text-[#444444]'>
                            With a 25.000 square meter facilities, a weaving
                            capacity of 20.000 mts, 50.000 mts of dyeing,
                            40.000 mts of printing ( both rotation and digital print )
                            per day, durability. It is committed to operational
                            excellence, design and innovation to create. Dedicated
                            team members allow KOZA to be flexible, on-time and
                            transparent. KOZA aims to provide fabrics meet the
                            needs and expectations of today’s customers in
                            terms of fashion, quality, durability. It is
                            committed to operational excellence, design
                            and innovation to create better efficiency
                            and create value for customers.
                        </p>
                    </div>
                    <div className='flex flex-wrap mt-10 text-center'>
                        <p className='flex-1'>
                            %100
                            <br />
                            Viscose Fabrics
                        </p>
                        <p className='flex-1'>
                            100%
                            <br />
                            Polyester Fabrics
                        </p>
                        <p className='flex-1'>
                            Viscose/
                            <br />
                            Linen Blends
                        </p>
                        <p className='flex-1'>
                            Cotton/
                            <br />
                            Linen Blends
                        </p>
                        <p className='flex-1'>
                            Cotton/Polyester
                            <br />
                            Blends
                        </p>
                        <p className='flex-1'>
                            PA and
                            <br />
                            Blends
                        </p>
                    </div>
                    <div className='mt-10 max-w-screen-lg mx-auto'>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 3 }}>
                            <Masonry gutter='1rem'>
                                <img src={Image01} alt="" className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                                <img src={Image05} alt="" className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                                <img src={Image03} alt="" className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                                <img src={Image02} alt="" className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                                <img src={Image06} alt="" className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                                <img src={Image04} alt="" className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                    <div className='text-center mt-10'>
                        <p className='text-[#444444]'>
                            KOZA supplies wide range of fabrics with different fibers and contents as per trends and customer needs.
                            Fabric performances should meet the demands of modern life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products