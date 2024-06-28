import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
function Homepage() {
  return (
    <Link to="/product">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="flex-start h-[1500px] center w-[900px]"
        style={{
          "--swiper-pagination-color": "#FF0000",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "50",
          "--swiper-pagination-bullet-size": "20px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide>
          <div className=" cutOut">
            <img
              src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719502519/New_Project_2_1_kykto0.png"
              alt="Terror-2-IMG"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cutOut">
            <img
              src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719503079/New_Project_2_2_wuss35.png"
              alt="Terror-2-IMG"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cutOut">
            <img
              src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719504327/New_Project_2_3_oklcio.png"
              alt="Terror-1-IMG"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cutOut">
            <img
              src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420341/t2_c61xkw.jpg"
              alt="Terror-2-IMG"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cutOut pt-2">
            <img
              src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420329/t3_z9rluy.jpg"
              alt="Terror-2-IMG"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cutOut pt-2">
            <img
              src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420294/t5_z1kbqz.jpg"
              alt="Terror-2-IMG"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </Link>
  );
}

export default Homepage;
