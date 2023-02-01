import React from 'react'
import kozaVideo from '../../../assets/aboutus/koza_video.png'
import card1 from '../../../assets/aboutus/card-1.png'
import card2 from '../../../assets/aboutus/card-2.png'
import card3 from '../../../assets/aboutus/card-3.png'
import thread from '../../../assets/aboutus/thread.png'
function Production() {
  return (
    <div className="flex flex-col mt-44">
      <div className="container mx-auto  max-3xl:py-16">
        <div className="flex justify-center">
          <p className="font-extrabold text-4xl">PRODUCTION</p>
        </div>
      </div>
      <div className="mt-14">
        <div className="flex justify-center relative">
          <img className="w-full" src={kozaVideo} alt="" />
          <p className="text-7xl absolute top-[35%] font-extrabold">
            VİDEO ALANI
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-28">
        <div className="justify-center items-center grid grid-cols-3 gap-7">
          <div className="bg-white shadow shadow-slate-300">
            <div className="p-7">
              <img className="w-full" src={card1} alt="" />
            </div>
          </div>
          <div className="bg-white shadow shadow-slate-300">
            <div className="p-7">
              <img className="w-full" src={card2} alt="" />
            </div>
          </div>
          <div className="bg-white shadow shadow-slate-300">
            <div className="p-7">
              <img className="w-full" src={card3} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-12 px-20">
          <p className="text-xl font-light text-center mt-6">
            Dedicated team members allow KOZA to be flexible, on-time and
            transparent. KOZA aims to provide fabrics meet the needs and
            expectations of today’s customers in terms of fashion, quality,
            durability. It is committed to operational excellence, design and
            innovation to create better efficiency and create value for
            customers.
          </p>
          <p className="text-xl font-light text-center mt-6">
            With a 25.000 square meter facilities, a weaving capacity of 20.000
            mts, 50.000 mts of dyeing, 40.000 mts of printing ( both rotation
            and digital print ) per day,
          </p>
        </div>
      </div>

      <div className="mt-28 mb-28">
        <div className="flex justify-center">
          <img className="w-full" src={thread} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Production
