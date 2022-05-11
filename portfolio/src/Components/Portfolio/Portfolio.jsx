import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Swipe from "../../img/swipe.png";
import 'swiper/css'

const Portfolio = () => {
  return (
 <div className="portfolio">
<span>Receant Projects</span>
<span>Portfolio</span>

<Swiper
spaceBetween={1.3}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'
>
    <SwiperSlide>
        <img src={Swipe} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Swipe} alt="" />
    </SwiperSlide>{""}
    <SwiperSlide>
        <img src={Swipe} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Swipe} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Swipe} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Swipe} alt="" />
    </SwiperSlide>
</Swiper>
 </div>
  )
}

export default Portfolio