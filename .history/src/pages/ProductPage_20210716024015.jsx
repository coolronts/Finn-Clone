import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
import Header from "../components/Header"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./style.css";

SwiperCore.use([Pagination,Navigation]);

const ProductPage = () => {
  return (
    <div className="bg-blue-50 h-full">
      <Header/>
      <div className="h-2/3 w-2/3 mt-24 px-36 flex flex-col justify-between">
        <Swiper pagination={{"type": "fraction"}} navigation={true} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ProductPage;