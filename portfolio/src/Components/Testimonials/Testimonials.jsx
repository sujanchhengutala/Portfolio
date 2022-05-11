import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testi from "../../img/testi.jpg";
import testi1 from "../../img/testi1.jpg";
import testi2 from "../../img/testi2.jpg";
import testi3 from "../../img/testi3.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonials = () => {
  const clients = [
    {
      img: testi,
      review: `Your thoughtfulness and support of MPCC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in MPCC will be justified. `,
    },
    {
      img: testi1,
      review: `Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!`,
    },
    {
      img: testi2,
      review: ` It's always a pleasure to work with Will and his team. They are personable, responsive, and results-oriented!`,
    },
    {
      img: testi3,
      review: `Your thoughtfulness and support of MPCC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in MPCC will be justified.`,
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </div><div className="blur t-blur1" style={{ background: "skyblue" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {clients.map((client, index) => {
          const { img, review } = client;
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={img} alt="" />
                <span>{review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
