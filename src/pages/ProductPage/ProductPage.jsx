import React,{useContext, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from "components/Shared/Header";
import Map from "components/ProductPage/Map";
import SmallCarousel from "components/ProductPage/SmallCarousel";
import PictureCarousel from "components/ProductPage/PictureCarousel";
import FinnKode from "components/ProductPage/FinnKode";
import Details from "components/ProductPage/Details";
import List from "components/Shared/List";
import Ads from "utils/Ads";
import Modal from "utils/Modal";
import { ModalContext } from "context/ModalContext";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const ProductPage = () => {
  const { isModal } = useContext(ModalContext);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true)
  const [listType, setListType] = useState(null)

  let { id } = useParams();
  let productLink = "https://cdn.contentful.com/spaces/" + process.env.REACT_APP_CONTENTFUL_SPACE_ID + "/environments/master/entries/"+ id +"?access_token=" + process.env.REACT_APP_CONTENTFUL_API_TOKEN

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(productLink)
      .then(response => {
        setDetails(response.data.fields)
        setListType ({
          name: "recommendation",
          place: response.data.fields.place
        })
        setLoading(false)
      })
    }
    fetchData()
  }, [productLink])
  
  const styles = {
    main: "mt-24 h-full pb-12",
    pictureCarousel: "px-36 mb-6",
    coloumns: "flex flex-row justify-between px-36",
    coloumn_1: "h-2/3 w-3/5",
    coloumn_2:"w-1/3",
    favoriteContainer: "flex mt-4",
    messageButton: "bg-white hover:bg-blue-50 border-2 hover:border-blue-700 text-blue-700 text-lg font-medium rounded-lg py-1 px-4",
    heartIcon: "inline text-3xl mr-2",
    logoContainer: "ml-2 flex text-gray-500 text-2xl items-center justify-between w-28",
    fav_message: "text-xs mt-1 font-lighter",
    smallCarouselContainer: "bg-blue-100 mt-6 rounded-lg p-6",
    smallCarouselTitle: "text-lg",
    smallCarouselBlueText: "text-blue-700 ml-4 text-base",
    smallCarousel: "flex mt-6",
    ad: "sticky top-0",
    finnKode: "mt-6 px-36",
    list:"mt-12"
  }

  return (!loading && (
    <div id="ProductPage" className="bg-white h-auto">
      <Header />
      <div className={styles.main}>
      <div className={styles.pictureCarousel} >
        <PictureCarousel details={details}/>
      </div>
      <div className={styles.coloumns}>
        <div className={styles.coloumn_1}>
          <div data-cy="favoriteContainer" className={styles.favoriteContainer}>
            <button className={styles.messageButton}>
              <AiOutlineHeart className={styles.heartIcon}/>Legg till favourit
            </button>
            <div className={styles.logoContainer}>
              <HiOutlineMail /> <FaFacebookSquare/> <FaTwitter/>
            </div>
          </div>
          <p className={styles.fav_message}>8 har lagt til som favoritt</p>
          <Details details={details}/>
          <Map address={details.place}/>
          <div className={styles.smallCarouselContainer}>
            <p class={styles.smallCarouselTitle}>Om nabolaget <span className={styles.smallCarouselBlueText}>Utforsk</span></p>
            <div className={styles.smallCarousel}>
              <SmallCarousel/>
            </div>
          </div>
        </div>
        <div className={styles.coloumn_2}>
          <Ads className={styles.ad}/>
        </div>
      </div>
      <div className={styles.finnKode}>
        <FinnKode />
      </div>
      <div className={styles.list}>
        <List listType={listType}/>
      </div>
    </div>
      {isModal && <Modal />}
    </div>
  ))
}

export default ProductPage;