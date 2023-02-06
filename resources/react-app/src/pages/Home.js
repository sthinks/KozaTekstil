import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Banner from '../assets/home/banner.png'
import NewsCarousel from '../components/news-carousel/NewsCarousel'

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="flex items-center justify-center py-8">
        <h2 className="uppercase font-bold text-2xl text-center">
          we are weaving the future with passion
        </h2>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="absolute w-full h-full bg-[#313443] opacity-60 left-0 top-0" />
        <div className="text-center absolute">
          <h2 className="text-white font-bold text-4xl">SUSTAINABILITY</h2>
          <h5 className="text-white text-2xl max-md:text-xl">
            We promote the use of{' '}
            <span className="font-semibold">recycled & eco-friendly</span> raw
            material & yarns
          </h5>
          <p className="text-white text-sm mt-4">
            KOZA is in a continius process of improving sustainability road map.
            We strive to produce innovation and sustainable fashion fabrics.
            <br /> This includes increasing the use of recycled and natural raw
            materials by reducing the environmental footprint.
          </p>
        </div>
        <img src={Banner} alt="banner" className="w-full h-auto" />
      </div>
      <div className="flex items-center justify-center py-8">
        <h2 className="uppercase font-bold text-2xl">fairs</h2>
      </div>
      <div className="bg-[#F5F5F5] text-center py-16 lg:h-[500px] md:mb-64 max-md:mb-12">
        <h2 className="font-newyork text-4xl">UPCOMING FAIRS</h2>
        <div className="container mx-auto pb-5 max-sm:px-10 max-md:px-12 max-2xl:px-14 2xl:px-14">
          <NewsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Home
