import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation  } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./swipeStyle.css";

SwiperCore.use([Pagination, Navigation,]);

const PictureCarousel = ({ details }) => {
  let link = "https://cdn.contentful.com/spaces/" + process.env.REACT_APP_CONTENTFUL_SPACE_ID + "/environments/master/assets?access_token=" + process.env.REACT_APP_CONTENTFUL_API_TOKEN
  
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
      const foundAssets = allAssets.find((asset) => image.sys.id === asset.sys.id)
      imageUrlArray.push({
        link: "https:"+foundAssets.fields.file.url,
        imageName: foundAssets.fields.title
      })
      return imageUrlArray
    })
    setImageUrlList(imageUrlArray)
    setLoading(false)
  }
  return (
    <div data-cy="pictureCarousel">    
      {(!loading && imageUrlList.length > 0) &&
        <Swiper pagination={{"type": "fraction"}} navigation={true} >
          {imageUrlList.map((image, index) =>{return (
            <SwiperSlide key={index}> <img style={{ "height": 600 }} src={image.link} alt="Carousel" /> </SwiperSlide>
          )})}  
        </Swiper>
      }
    </div>
  )
}

export default PictureCarousel