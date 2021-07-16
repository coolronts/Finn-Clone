import React, { useState, useEffect } from 'react';
import Map from "../Map";
import SmallCarousel from "../SmallCarousel";
import PictureCarousel from "../PictureCarousel";
import Ads from "../../../utils/Ads";
import Details from "../Details"
import { AiOutlineHeart } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import { FaFacebookSquare, FaTwitter } from "react-icons/fa"

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
    rent: "tracking-tight text-2xl font-medium",
    options: "font-semibold text-medium",
    option: "font-medium",
    descriptionTitle: "font-medium text-2xl mt-3",
    description: "text-justify mt-3"    
  }
  return (
    <div className={styles.main}>
      <div className={styles.coloumn_1}>
        <PictureCarousel/>
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
      <Details/>
      <p className="text-gray-700 my-6 text-lg font-medium">Vardeveien 3C, 1182 Oslo</p>
      <Map/>
      <div className="bg-blue-100 mt-6 rounded-sm p-6">
        <p class="text-lg">Om nabolaget <span className="text-blue-700 ml-4 text-base">Utforsk</span></p>
        <div className="flex mt-6">
          <SmallCarousel/>
        </div>
      </div>
      <div className="mt-6">
        <p>FINN-kode	222971167</p>
        <p>Sist endret	10. jul. 2021 02:22</p>
        <p>Rapporter annonse</p>
        <p>Annonsene kan være mangelfulle i forhold til lovpålagt opplysningsplikt. Før bindende avtale inngås oppfordres interessenter til å innhente komplett informasjon fra meglerforetaket, selger eller utleier.</p>
      </div>
      </div>

      <div className="w-full ml-24 sticky">
        <Ads/>
      </div>
    </div>
  )
}

export default ProductMain;