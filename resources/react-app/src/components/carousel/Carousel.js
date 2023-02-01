import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide1 from "../../assets/carousel/image.png"
import ReactPlayer from 'react-player'
import Video from "../../assets/carousel/video.mp4"
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css'

const Carousel = () => {
    return (
        <Swiper
            className="max-xl:h-auto 2xl:h-screen"
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
        >
            <SwiperSlide className="relative flex justify-center items-center">
                <div className="absolute text-center">
                    <h1 className="text-[#004C96] sm:text-[40px] text-xl font-[400] font-grape">Since 1993</h1>
                    <h2 className="text-[#004C96] sm:text-[48px] text-2xl font-extrabold sm:leading-[3.5rem]">WE ARE WEAVING <br /> THE FUTURE</h2>
                </div>
                <ReactPlayer
                    url={Video}
                    playing={true}
                    loop={true}
                    width="100%"
                    height="auto"
                    config={{
                        file: {
                            attributes: {
                                autoPlay: true,
                                muted: true
                            }
                        }
                    }} />
            </SwiperSlide>
            <SwiperSlide className="relative flex justify-center items-center">
                <div className="absolute text-center">
                    <h1 className="text-[#004C96] sm:text-[40px] text-xl font-[400] font-grape">Since 1993</h1>
                    <h2 className="text-[#004C96] sm:text-[48px] text-2xl font-extrabold sm:leading-[3.5rem]">WE ARE WEAVING <br /> THE FUTURE</h2>
                </div>
                <img src={Slide1} className="w-full h-auto" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel