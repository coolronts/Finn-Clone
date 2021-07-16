import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
import Header from "../components/Header";
import {BiUserCircle} from "react-icons/bi"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./swipeStyle.css";

SwiperCore.use([Pagination,Navigation]);

const ProductPage = () => {
  return (
    <div className="bg-white h-full">
      <Header />
      <div className="mt-24 px-36 flex justify-between h-auto">
        <div className="h-2/3 w-3/4">
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
        </div>

        <div className="w-full">
          <div className="bg-blue-100 rounded-md px-1 flex py-4 items-center">
            <BiUserCircle className="text-5xl"/>
            <p className="w-1/2 text-center ml-1 mr-2">Du må være logget inn for å se profilen</p>
            <button className="bg-white  font-medium hover:bg-transparent border-2 hover:border-blue-700 text-blue-700 text-xs rounded-md p-1">Logg Inn</button>
          </div>
          <button className="bg-blue-700 w-full my-6  font-medium hover:bg-transparent border-2 hover:border-blue-700 text-white text-lg rounded-md p-1">Logg Inn</button>
          

        </div>
      </div>
    </div>
  )
}

export default ProductPage;