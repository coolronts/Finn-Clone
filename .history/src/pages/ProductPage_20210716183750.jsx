import React from 'react';
import Header from "#components/Header";
import ProductMain from "#components/ProductPage/ProductMain"

const ProductPage = () => {
  return (
    <div className="bg-white h-auto">
      <Header />
      <ProductMain/>
    </div>
  )
}

export default ProductPage;