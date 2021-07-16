import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import { Swiper, SwiperSlide } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Pagination,Navigation} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);


const ProductPage = () => {
  return (
    <>
      <Swiper pagination={{"type": "fraction"}} navigation={true} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductPage;