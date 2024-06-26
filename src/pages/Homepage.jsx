import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
function Homepage() {
  return (
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
      className="flex-start h-[1500px] center w-[1200px] md:items-center"
      style={{
        "--swiper-pagination-color": "#FF0000",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "50",
        "--swiper-pagination-bullet-size": "20px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420360/T_rrlcn9.jpg"
          alt="Terror-1-IMG"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420341/t2_c61xkw.jpg"
          alt="Terror-2-IMG"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420329/t3_z9rluy.jpg"
          alt="Terror-2-IMG"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dzwbcfmbe/image/upload/v1719420294/t5_z1kbqz.jpg"
          alt="Terror-2-IMG"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Homepage;
