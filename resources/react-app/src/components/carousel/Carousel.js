import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ReactPlayer from 'react-player'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'
import SwiperCore, { Autoplay } from 'swiper';

const Carousel = ({ data }) => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      className="max-xl:h-auto 2xl:h-screen"
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      initialSlide
    >
      {data?.data.map((item) => {
        if (item.image === null) {
          return <SwiperSlide className="relative flex justify-center items-center" >
            <div className='w-full h-full absolute bg-white left-0 top-0 opacity-40' />
            <div className="absolute text-center z-10">
              <h1 className="text-[#004C96] sm:text-[40px] text-xl font-[400] font-grape">
                Since 1993
              </h1>
              <h2 className="text-[#004C96] sm:text-[48px] text-2xl font-extrabold sm:leading-[3.5rem]">
                WE ARE WEAVING <br /> THE FUTURE
              </h2>
            </div>
            <ReactPlayer
              url={item.video[0]?.download_link}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    muted: true,
                  },
                },
              }}
            />
          </SwiperSlide>
        } else {
          return <SwiperSlide className="relative flex justify-center items-center">
            <div className='w-full h-full absolute bg-white left-0 top-0 opacity-40' />
            <div className="absolute text-center z-10">
              <h1 className="text-[#004C96] sm:text-[40px] text-xl font-[400] font-grape">
                Since 1993
              </h1>
              <h2 className="text-[#004C96] sm:text-[48px] text-2xl font-extrabold sm:leading-[3.5rem]">
                WE ARE WEAVING <br /> THE FUTURE
              </h2>
            </div>
            <img src={item.image} className="w-full h-auto" />
          </SwiperSlide>
        }
      })}
    </Swiper>
  )
}

export default Carousel
