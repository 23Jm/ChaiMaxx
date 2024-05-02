import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

//images

import slide1 from "../utils/slider/delicious-coffee-beans-cup_23-2150691429.avif";
import slide2 from "../utils/slider/front-view-cup-tea-with-lemon-cinnamon-kettle-grey-desk_140725-63673.avif";
import slide3 from "../utils/slider/high-angle-tasty-composition-noodles-table_23-2148803860.jpg";
import slide4 from "../utils/slider/long-chicken-nuggets-served-with-fries-ketchup-sweet-chili-sauce_140725-6704.jpg";
import slide5 from "../utils/slider/square-khachapuri-with-puff-pastry-cheese_140725-5684.avif";
import slide6 from "../utils/slider/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.avif";
import slide7 from "../utils/slider/slice-chocolate-brownie-with-walnut-vanilla-ice-cream.jpg";
import slide8 from "../utils/slider/top-view-delicious-fries-sauce_23-2149235944.avif";
import slide9 from "../utils/slider/view-3d-coffee-cup-with-roasted-beans_23-2151083732.avif";
import slide10 from "../utils/slider/high-angle-tasty-composition-noodles-table_23-2148803860.jpg";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperBtn() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide10} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
