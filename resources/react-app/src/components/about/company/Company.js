import React from 'react'
import aboutusimg from '../../../assets/aboutus/aboutusimg.png'
import aboutusimg2 from '../../../assets/aboutus/aboutusimg2.png'
import { BsDot } from 'react-icons/bs'

function Company() {
  return (
    <div className="flex relative">
      <div className="mt-16 container mx-auto xl:px-10">
        <div className="flex justify-center items-center text-4xl font-extrabold">
          COMPANY
        </div>
        <div className="flex justify-center items-center mt-16 max-md:flex-col max-md:mt-0 max-md:px-4">
          <div className="flex-1 mt-14 text-xl font-light">
            <p className='text-sans'>
              Our Founder <b>Mr. Refik ETYEMEZ</b> established{' '}
              <b>KOZA TEKSTIL</b> in Bursa (OSB ), Turkiye in 1993 and in 2009
              KOZA had increased its capacity with second factory in Bursa
              Demirtas OSB. KOZA is specialized in both woven and knit fabrics
              with integrating the areas of R&D, Weaving, Dyeing, Printing and
              Finishing. While offering the latest trends with its vertical
              production system, it has a strong emphasis in ethics and
              sustainability with its experienced team. Its market knowledge
              and adaptation of new technologies, constantly serve its
              customers with a quick respond by providing trend and customer
              preferences.
            </p>
          </div>
          <div className="flex-1 max-md:mt-4">
            <img className="float-right" src={aboutusimg} alt="" />
          </div>
        </div>

        <div className="mt-28 max-md:mt-5">
          <div className="flex justify-between max-md:flex-col">
            <div className="flex-1 mt-14 text-lg font-medium max-md:px-4">
              <p className="text-5xl font-bold my-6 ">Our Goals & Values</p>
              <p className="text-slate-600">
                Innovation, quality and good customer service are the core
                values. Aiming to respond to changing trends for customer needs
                and requests.
              </p>
              <p className="text-4xl font-bold my-6">WE AIM TO OFFER</p>
              <p className="text-slate-600">
                We aim to offer;
                <ul>
                  <li className="flex items-center">
                    <BsDot className="text-slate-700" />
                    Best customer service
                  </li>
                  <li className="flex items-center">
                    <BsDot className="text-slate-700" />
                    Competitive prices and on-time deliveries
                  </li>
                  <li className="flex items-center">
                    <BsDot className="text-slate-700" />
                    Passionately adopting high ethical and work standards
                  </li>
                  <li className="flex items-center">
                    <BsDot className="text-slate-700" />
                    Respecting the individual rights and nature
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex-1 max-md:px-4 max-md:mt-4">
              <img
                className="absolute top-[57%] md:right-10 max-md:relative"
                src={aboutusimg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
