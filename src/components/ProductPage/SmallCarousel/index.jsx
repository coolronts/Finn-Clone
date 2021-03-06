import React from 'react';
import SmallCard from 'utils/SmallCard';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,Scrollbar,Mousewheel  } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'swiper/components/scrollbar/scrollbar.scss';
import "./swipeStyle.css";

SwiperCore.use([Pagination, Navigation, Scrollbar, Mousewheel]);

const SmallCarousel = () => {
  const numberOfSlides = 10;
  return (
    <Swiper data-cy="smallCarousel" scrollbar={{ draggable: true }} direction={'horizontal'} mousewheel={true}  spaceBetween={20} slidesPerView={3} navigation={true} pagination={{ clickable: true }}>
      {[...Array(numberOfSlides)].map((_, i) => 
        <SwiperSlide >  <SmallCard /> </SwiperSlide>
      )}      
    </Swiper>
  )
}

export default SmallCarousel