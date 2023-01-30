import React from 'react'
import Image01 from "../../assets/home/1.png"
import "./news-carousel.css"
import Slider from "react-slick";

const NewsCarousel = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <Slider {...settings}>
            <div className='text-center bg-[#FCFCFC] shadow-md' >
                <div className='p-4'>
                    <img src={Image01} className="w-full h-auto object-cover" alt='' />
                </div>
                <div className='pb-6'>
                    <h5 className='font-extrabold text-xl'>TEXWORLD PARIS-FRANCE</h5>
                    <h5 className='font-normal'>MARCH 14-18, 2023</h5>
                </div>
            </div>
            <div className='text-center bg-[#FCFCFC] shadow-md' >
                <div className='p-4'>
                    <img src={Image01} className="w-full h-auto object-cover" alt='' />
                </div>
                <div className='pb-6'>
                    <h5 className='font-extrabold text-xl'>TEXWORLD PARIS-FRANCE</h5>
                    <h5 className='font-normal'>MARCH 14-18, 2023</h5>
                </div>
            </div>
            <div className='text-center bg-[#FCFCFC] shadow-md' >
                <div className='p-4'>
                    <img src={Image01} className="w-full h-auto object-cover" alt='' />
                </div>
                <div className='pb-6'>
                    <h5 className='font-extrabold text-xl'>TEXWORLD PARIS-FRANCE</h5>
                    <h5 className='font-normal'>MARCH 14-18, 2023</h5>
                </div>
            </div>
            <div className='text-center bg-[#FCFCFC] shadow-md' >
                <div className='p-4'>
                    <img src={Image01} className="w-full h-auto object-cover" alt='' />
                </div>
                <div className='pb-6'>
                    <h5 className='font-extrabold text-xl'>TEXWORLD PARIS-FRANCE</h5>
                    <h5 className='font-normal'>MARCH 14-18, 2023</h5>
                </div>
            </div>
            <div className='text-center bg-[#FCFCFC] shadow-md' >
                <div className='p-4'>
                    <img src={Image01} className="w-full h-auto object-cover" alt='' />
                </div>
                <div className='pb-6'>
                    <h5 className='font-extrabold text-xl'>TEXWORLD PARIS-FRANCE</h5>
                    <h5 className='font-normal'>MARCH 14-18, 2023</h5>
                </div>
            </div>
        </Slider>
    )
}

export default NewsCarousel
