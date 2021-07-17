import React,{useContext, useState, useEffect} from 'react';
import Header from "#components/Header";
import ProductMain from "#components/ProductPage/ProductMain";
import Modal from "#utils/Modal";
import { ModalContext } from "#context/ModalContext";
import { useParams } from "react-router-dom";
import axios from 'axios';
import dotenv from "dotenv";

const ProductPage = () => {
  const { isModal } = useContext(ModalContext);
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true)

  let { id } = useParams();
  let productLink = "https://cdn.contentful.com/spaces/" + process.env.CONTENTFUL_SPACE_ID + "/environments/master/entries/"+ id +"?access_token=" + process.env.CONTENTFUL_API_TOKEN
  
  useEffect(async () => {
    const result = await axios.get(productLink)
    setItemDetails(result.data.fields)
    setLoading(false)
  },[id])

  return (!loading && (
    <div className="bg-white h-auto">
      <Header />
      <ProductMain itemDetails={itemDetails}/>
      {isModal && <Modal />}
    </div>
  ))
}

export default ProductPage;