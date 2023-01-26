import React, { useState } from 'react'
function FactoryMap() {
  const [filter, setFilter] = useState(1)

  return (
    <div>
      <div className="mt-12">
        <div className="flex justify-center ">
          <div className="h-20 bg-white  w-[96%] flex justify-end flex-col shadow-koza ">
            <ul className="flex justify-evenly text-lg font-medium leading-5 text-[#004C96] px-36  max-md:px-20 max-sm:px-0 max-md:text-base max-sm:text-sm">
              <li
                className={
                  filter === 1
                    ? 'cursor-pointer p-3 w-auto text-center border-b-4 border-[#004C96]'
                    : 'cursor-pointer p-3 w-auto text-center text-[#c5c5c5]'
                }
                onClick={() => setFilter(1)}
              >
                FACTORY 1
              </li>
              <li
                className={
                  filter === 2
                    ? 'cursor-pointer  p-3 w-auto text-center border-b-4 border-[#004C96]'
                    : 'cursor-pointer  p-3 w-auto text-center text-[#c5c5c5]'
                }
                onClick={() => setFilter(2)}
              >
                FACTORY 2
              </li>
              <li
                className={
                  filter === 3
                    ? 'cursor-pointer  p-3 w-auto text-center border-b-4 border-[#004C96]'
                    : 'cursor-pointer  p-3 w-auto  text-center text-[#c5c5c5]'
                }
                onClick={() => setFilter(3)}
              >
                STORE
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <div className="relative">
            <div className="w-[98%] absolute right-0 bg-[#F5F5F5] h-80 max-sm:hidden" />
          </div>
          <div className="container mx-auto max-w-screen-lg ">
            <div className="flex justify-center relative flex-wrap max-sm:flex-col">
              <div className=" bg-white overflow-hidden shadow-lg mx-3 h-auto flex-1 mt-12 max-sm:mb-3 max-sm:mt-0">
                <div>
                  <iframe
                    title="1"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6090.877101629458!2d28.949911367062743!3d40.24378398376687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca138819aaee49%3A0x68b5e184316dbba!2zQmFsYXQsIFNhcsSxIENkLiBObzoxMiwgMTYxNDAgTWluYXJlbGnDp2F2dcWfIEJ0c28gT3NiL05pbMO8ZmVyL0J1cnNh!5e0!3m2!1str!2str!4v1674659351479!5m2!1str!2str"
                    style={{ border: '0px', width: '100%', height: '300px' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="px-6 py-4">
                  <p className="text-[#000000] opacity-40 text-center text-base font-medium p-1 max-lg:text-sm max-lg:p-0">
                    OSB Sarı Cd. No:12 Nilufer / BURSA - TURKEY <br /> +90 224
                    243 10 37 - 39 <br /> +90 224 243 12 93
                  </p>
                </div>
              </div>
              <div className=" bg-white overflow-hidden shadow-lg mx-3 h-auto flex-1 mt-12 max-sm:mb-3 max-sm:mt-0">
                <div>
                  <iframe
                    title="2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.146366630196!2d29.054544976681903!3d40.27249874397054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca40051931fdcd%3A0x6612f7ecf173d622!2s%C4%B0stanbul%20Cd%20No%3A582%2C%2016245%20Ala%C5%9Far%20Osb%2FOsmangazi%2FBursa!5e0!3m2!1str!2str!4v1674659387211!5m2!1str!2str"
                    style={{ border: '0px', width: '100%', height: '300px' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="px-6 py-4">
                  <p className="text-[#000000] opacity-40 text-center text-base font-medium p-1 max-lg:text-sm max-lg:p-0">
                    Istanbul Yolu Cd. No:582 Demirtaş / BURSA - TURKEY <br />{' '}
                    +90 224 261 62 50 - 57 <br /> +90 224 261 62 58
                  </p>
                </div>
              </div>
              <div className=" bg-white overflow-hidden shadow-lg mx-3 h-auto flex-1 mt-12 max-sm:mb-3 max-sm:mt-0">
                <div>
                  <iframe
                    title="3"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2129.0748848561734!2d28.908833931737774!3d41.0041047304288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabba88697dfc3%3A0xbb13c5660d9943f1!2sTelsiz%2C%20Seyit%20Nizam%20Cd.%20No%3A166%2C%2034020%20Zeytinburnu%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1674659419656!5m2!1str!2str"
                    style={{ border: '0px', width: '100%', height: '300px' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="px-6 py-4">
                  <p className="text-[#000000] opacity-40 text-center text-base font-medium p-1 max-lg:text-sm max-lg:p-0">
                    Telsiz Mh. Seyitnizam Cd. No:166/D Zeytinburnu / ISTANBUL -
                    TURKEY <br /> +90 212 416 67 73 - 74 <br /> +90 212 416 67
                    75
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactoryMap
