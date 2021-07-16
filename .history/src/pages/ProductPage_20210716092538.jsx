import React from 'react';
import Header from "../components/Header";
import ProductMain from "../components/ProductPage/ProductMain"

const ProductPage = () => {
  return (
    <div className="bg-white h-full">
      <Header />
      <ProductMain/>
    </div>
  )
}

export default ProductPage;