import React from 'react';
import SmallCard from '../../../utils/SmallCard'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,Scrollbar,Mousewheel  } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./swipeStyle.css";

SwiperCore.use([Pagination, Navigation, Scrollbar, Mousewheel]);

const SmallCarousel = () => {
  return (
    <Swiper pagination={{"type": "fraction"}} navigation={true} className="swiper-navigation-black">
      <SwiperSlide>
        <img style={{"height":400}}  src="https://picsum.photos/200/300"/>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default SmallCarousel