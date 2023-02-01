import React from 'react'
import Banner from "../assets/sustainability/sustainability-banner.png"
import Image01 from "../assets/sustainability/susta-1.png"
import Image02 from "../assets/sustainability/susta-2.png"
import Image03 from "../assets/sustainability/susta-3.png"
import Image04 from "../assets/sustainability/susta-4.png"
import Image05 from "../assets/sustainability/susta-5.png"
import Image06 from "../assets/sustainability/susta-6.png"

const Sustainability = () => {
    return (
        <div>
            <div className='relative flex justify-end items-center max-md:justify-center'>
                <div className='bg-[#000] opacity-40 absolute h-full w-full left-0 top-0' />
                <div className='absolute md:right-[10%]'>
                    <h1 className='font-bold text-5xl text-[#fff] max-md:text-3xl'>Sustainability</h1>
                </div>
                <img src={Banner} className="w-full h-auto" alt='' />
            </div>
            <div className='container mx-auto md:h-[30rem] max-md:p-4 xl:px-10'>
                <div className='flex h-full py-10 max-md:flex-col-reverse'>
                    <div className='relative flex max-md:flex-col items-center flex-1'>
                        <img src={Image01} className='object-contain max-md:w-full max-md:mt-4' />
                        <img src={Image02} className='object-contain md:absolute md:-top-[45%] md:right-[35%] max-md:w-full max-md:mt-4' />
                        <img src={Image03} className='object-contain md:absolute md:bottom-0 md:right-[32%] max-md:w-full max-md:mt-4' />
                    </div>
                    <div className='relative flex-1'>
                        <p className='text-3xl'>
                            We promote the use of <br />
                            <span className='font-semibold'>
                                recycled & eco-friendly{" "}
                            </span>
                            raw{" "}
                            <span className='font-semibold'>
                                material & yarns
                            </span>
                        </p>
                        <p className='text-xl font-semibold mt-5'>
                            A new std of Responsibility from raw materials
                            to the design and production process
                        </p>
                        <p className='text-lg opacity-50 mt-5'>
                            KOZA is in a continius process of improving sustainability road map.
                            We strive to produce innovation and sustainable fashion fabrics.
                            This includes increasing the use of recycled and
                            natural raw materials by reducing the environmental footprint.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto md:h-[30rem] xl:px-10'>
                <div className='flex h-full py-10 max-md:flex-col max-md:p-4'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <p className='text-xl font-semibold'>
                            Embracing the FUTURE
                            by respecting our HERITAGE
                        </p>
                        <p className='text-lg opacity-50 mt-5'>Further to our promise for our society, customers and industry, we target;</p>
                        <ul className='text-lg opacity-50 list-disc max-md:px-4'>
                            <li>Delivering sustainable products and solutions</li>
                            <li>Passionately adopting high ethical and work stds</li>
                            <li>Respecting the individual rights and nature</li>
                        </ul>
                    </div>
                    <div className='relative flex items-center flex-1 max-md:flex-col'>
                        <img src={Image04} className='object-contain md:absolute left-0 max-md:w-full max-md:mt-4' alt='' />
                        <img src={Image05} className='object-contain z-10 md:absolute -top-[45%] right-[45%] max-md:w-full max-md:mt-4' alt='' />
                        <img src={Image06} className='object-contain md:absolute bottom-[30%] right-0 max-md:w-full max-md:mt-4' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sustainability