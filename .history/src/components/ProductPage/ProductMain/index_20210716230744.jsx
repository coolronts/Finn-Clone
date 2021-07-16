import React from 'react';
import Map from "#components/ProductPage/Map";
import SmallCarousel from "#components/ProductPage/SmallCarousel";
import PictureCarousel from "#components/ProductPage/PictureCarousel";
import FinnKode from "#components/ProductPage/FinnKode";
import Details from "#components/ProductPage/Details";
import List from "#components/Shared/List";
import Ads from "#utils/Ads";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const ProductMain = () => {
  const styles = {
    main: "mt-24 px-36 h-full pb-12",
    pictureCarousel: "px-24 mb-6",
    coloumns: "flex flex-row justify-between",
    coloumn_1: "h-2/3 w-3/5 ",
    coloumn_2:"w-1/3",
    favoriteContainer: "flex mt-4",
    messageButton: "bg-white hover:bg-blue-50 border-2 hover:border-blue-700 text-blue-700 text-lg font-medium rounded-lg py-1 px-4",
    heartIcon: "inline text-3xl mr-2",
    logoContainer: "ml-2 flex text-gray-500 text-2xl items-center justify-between w-28",
    fav_message: "text-xs mt-1 font-lighter",
    
  }
  return (
    <div className={styles.main}>
      <div className={styles.pictureCarousel} >
        <PictureCarousel/>
      </div>
      <div className={styles.coloumns}>
        <div className={styles.coloumn_1}>
          <div className={styles.favoriteContainer}>
            <button className={styles.messageButton}>
              <AiOutlineHeart className={styles.heartIcon}/>Legg till favourit
            </button>
            <div className={styles.logoContainer}>
              <HiOutlineMail /> <FaFacebookSquare/> <FaTwitter/>
            </div>
          </div>
          <p className={styles.fav_message}>8 har lagt til som favoritt</p>
          <Details/>
          <Map/>
          <div className="bg-blue-100 mt-6 rounded-lg p-6">
            <p class="text-lg">Om nabolaget <span className="text-blue-700 ml-4 text-base">Utforsk</span></p>
            <div className="flex mt-6">
              <SmallCarousel/>
            </div>
          </div>
          
        </div>

        <div className={styles.coloumn_2}>
          <Ads className="sticky top-0 "/>
        </div>
        
      </div>
      <div className="mt-6">
        <FinnKode />
      </div>
      <div className="mt-12">
        <List/>
      </div>
      
    </div>
  )
}

export default ProductMain;