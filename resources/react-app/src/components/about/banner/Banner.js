import React from 'react'
import aboutusBanner from '../../../assets/aboutus/aboutusBanner.png'
function Banner() {
  return (
    <div className="w-full relative flex justify-center items-center max-md:justify-end">
      <img className="w-full" src={aboutusBanner} alt="" />
      <div className="absolute">
        <p className="text-white text-xl font-light max-md:text-xs max-lg:text-base">
          Biz bu evde gerçekçiyiz. Hata yaparız.
          <br />
          Özür dileriz, ikinci şans veririz. <br />
          Eğleniriz, güleriz,sarılırız, affederiz. Gürültü yaparız. <br />
          <b>Biz bir aileyiz. Birbirimizi severiz.</b>
        </p>

        <p className="mt-3 text-2xl text-white font-bold max-md:text-base max-lg:text-lg max-md:mt-1">
          Refik ETYEMEZ
        </p>
      </div>
    </div>
  )
}

export default Banner
