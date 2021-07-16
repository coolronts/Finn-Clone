import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
import { BiUserCircle } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineHeart } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import { FaFacebookSquare,FaTwitter,FaLeaf } from "react-icons/fa"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./swipeStyle.css";

SwiperCore.use([Pagination,Navigation]);

const ProductMain = () => {
  return (
    
      <div className="mt-24 px-36 flex justify-between h-full">
        <div className="h-2/3 w-3/5">
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

          <div className="flex mt-4">
            <button className="bg-white  hover:bg-blue-50 border-2 hover:border-blue-700 text-blue-700 text-lg font-medium rounded-md py-1 px-4">
              <AiOutlineHeart className="inline text-3xl mr-2"/>Legg till favourit
            </button>
            <div className="ml-2 flex text-gray-500 text-2xl items-center justify-between w-28">
              <HiOutlineMail />
              <FaFacebookSquare/>
              <FaTwitter/>
            </div>
          </div>
        </div>

        <div className="w-full ml-24 sticky">
          <div className="bg-blue-50 rounded-md px-1 flex py-4 items-center">
            <BiUserCircle className="text-5xl"/>
            <p className="w-1/2 text-center ml-1 mr-2">Du må være logget inn for å se profilen</p>
            <button className="bg-white font-medium hover:bg-transparent border-2 hover:border-blue-700 text-blue-700 text-xs rounded-md p-1">Logg Inn</button>          
          </div>
          <button className="bg-blue-600 w-full mt-3 mb-1 font-semibold  hover:bg-blue-800 text-white rounded-lg py-3 text-lg">Send Melding</button>
          <p className="text-blue-600 text-xs mb-6">Vis mobilnummer</p>
          <div className="bg-green-100 w-full flex items-center px-3 py-4 rounded-lg">
            <FaLeaf className="text-3xl text-green-500"/>
            <div className="ml-2 w-4/5 text-left font-medium  text-black rounded-lg py-3 text-lg">Denne varren sparer CO2 tilsvarende production av <p className="text-xl font-medium">95nye plastposer</p> </div>
            <IoIosArrowDown className="text-blue-500 text-2xl"/>
          </div>
          
          <div className="text-blue-600 text-lg mt-4">
            <p className="font-thin hover:underline cursor-pointer">Få hjelp til frakt</p>
            <p className="font-thin hover:underline cursor-pointer">Pris på lån</p>
          </div>

        </div>
      </div>
  )
}

export default ProductMain;