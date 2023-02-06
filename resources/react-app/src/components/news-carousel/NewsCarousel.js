import React, { useEffect } from 'react'
import Image01 from '../../assets/home/1.png'
import './news-carousel.css'
import Slider from 'react-slick'
import { useService } from '../../service/useService'
import allService from '../../service/services'
const NewsCarousel = () => {
  const { data, isLoading, refetch } = useService('upcoming-fairs', () =>
    allService.fetchFairsSlider(),
  )
  if (isLoading) {
    return <div>asdasd</div>
  }
  const months = (month) => {
    switch (month) {
      case '01':
        return 'January'
      case '02':
        return 'February'
      case '03':
        return 'March'
      case '04':
        return 'April'
      case '05':
        return 'May'
      case '06':
        return 'June'
      case '07':
        return 'July'
      case '08':
        return 'August'
      case '09':
        return 'September'
      case '10':
        return 'October'
      case '11':
        return 'November'
      case '12':
        return 'December'
      default:
        break
    }
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const dateHandler = (dateFirst, dateSecond) => {
    const dateValue = dateFirst.split('-')
    const Month = months(dateValue[1])
    console.log(Month)
    const Year = dateValue[0]
    const DayFirst = dateValue[2]
    const DaySecond = dateSecond.split('-')[2]
    return (
      <div className="flex justify-center items-center text-lg">
        <p className="px-2 uppercase">{Month}</p>
        <p className="px-2">
          {DaySecond}-{DayFirst}
        </p>
        ,<p className="px-2">{Year}</p>
      </div>
    )
  }
  return (
    <Slider {...settings}>
      {data?.data.map((fairs) => (
        <div className="text-center bg-[#FCFCFC] shadow-md">
          <div className="p-4">
            <img
              src={fairs.image}
              className="w-full h-[450px] object-cover"
              alt=""
            />
          </div>
          <div className="pb-6">
            <h5 className="font-extrabold text-xl">
              {fairs.city}-{fairs.country}
            </h5>
            <h5 className="font-normal">
              {dateHandler(fairs.fairs_date_finish, fairs.fairs_date_start)}
            </h5>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default NewsCarousel
