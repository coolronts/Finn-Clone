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
  const styles = {
    main: "mt-24 px-36 flex justify-between h-full pb-12",
    coloumn_1: "h-2/3 w-3/5",
    coloumn_2: "flex mt-4",
    messageButton: "bg-white hover:bg-blue-50 border-2 hover:border-blue-700 text-blue-700 text-lg font-medium rounded-lg py-1 px-4",
    heartIcon: "inline text-3xl mr-2",
    logoContainer: "ml-2 flex text-gray-500 text-2xl items-center justify-between w-28",
    fav_message: "text-xs mt-1 font-lighter",
    title: "tracking-tight text-3xl mt-4 font-medium",
    place: "text-sm mt-2",
    rentText: "tracking-tight text-base mt-2 font-medium",
    
    
    
  }
  return (
    
      <div className={styles.main}>
        <div className={styles.coloumn_1}>
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

          <div className={styles.coloumn_2}>
            <button className={styles.messageButton}>
            <AiOutlineHeart className={styles.heartIcon}/>Legg till favourit
            </button>
            <div className={styles.logoContainer}>
              <HiOutlineMail />
              <FaFacebookSquare/>
              <FaTwitter/>
            </div>
        </div>
        <p className={styles.fav_message}>8 har lagt til som favoritt</p>
        <p className={styles.title}>Nyere 2-roms hybel på Ekeberg - Toppstandard</p>
        <p className={styles.place}>Vardeveien 3C, 1182 Oslo</p>
        <p className={styles.rentText}>Månedsleie</p>
        <p className="tracking-tight text-2xl font-medium">3000 Kr</p>
      
        <p className="font-semibold text-medium">Inkluderer <span className=" font-medium">Strøm, Bredbånd, Vannbåren Gulvvarme, Balansert Ventilasjon, Internett</span></p>
        <p className="font-semibold text-medium">Depositum <span className=" font-medium">37800</span></p>
        <p className="font-semibold text-medium">Primærrom <span className=" font-medium">38 m²</span></p>
        <p className="font-semibold text-medium">Soverom <span className=" font-medium">1</span></p>
        <p className="font-semibold text-medium">Etasje <span className=" font-medium">0</span></p>
        <p className="font-semibold text-medium">Boligtype <span className=" font-medium">Hybel</span></p>
        <p className="font-semibold text-medium">Leieperiode <span className=" font-medium">01.08.2021</span></p>
        <p className="font-semibold text-medium">Energimerking <span className=" font-medium p-1 bg-yellow-200">A - gul</span></p>
      
      
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