import React, {useState, useEffect} from 'react';
import axios from 'axios';
import dotenv from "dotenv";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation  } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./swipeStyle.css";

SwiperCore.use([Pagination, Navigation,]);

const PictureCarousel = ({ details }) => {
  let link = "https://cdn.contentful.com/spaces/" + process.env.CONTENTFUL_SPACE_ID + "/environments/master/assets?access_token=" + process.env.CONTENTFUL_API_TOKEN
  
  const [imageUrlList, setImageUrlList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(link)
      .then((response) => {
        getImagesUrl(response.data.items)
      })
  }, [details])
  
  function getImagesUrl(allAssets) {
    let imageUrlArray = []
    details.images.map(image => {
      allAssets.map((asset) => {
        if (image.sys.id == asset.sys.id) {
          imageUrlArray.push({
            link: "https:"+asset.fields.file.url,
            imageName: asset.fields.title
          })
        }
      })
    })
    setImageUrlList(imageUrlArray)
    setLoading(false)
  }
  return (
    <>    
      {(!loading && imageUrlList.length > 0) &&
        <Swiper pagination={{"type": "fraction"}} navigation={true} >
          {imageUrlList.map((image, index) =>{return (
            <SwiperSlide key={index}> <img style={{ "height": 600 }} src={image.link} alt="Image" /> </SwiperSlide>
          )})}  
        </Swiper>
      }
    </>
  )
}

export default PictureCarousel