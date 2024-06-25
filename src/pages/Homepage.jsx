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
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="h-[80vh] center w-[85vw]"
      style={{
        "--swiper-pagination-color": "#75B12C",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717636506/55842836_338409310212680_5126625475197618213_n_z7akjj.jpg"
          alt="Terror-1-IMG"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717636504/50507044_793147987685075_156331552354254466_n_ibc1fd.jpg"
          alt="Terror-2-IMG"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Homepage;
