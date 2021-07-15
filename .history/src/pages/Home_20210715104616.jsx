import React, { useState, useContext }  from 'react';
import Header from '../components/Header'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'
import List from '../components/Home/List'
import Card from '../utils/Card'
import Modal from "../utils/Modal"
import {ModalContext} from "../Context/ModalContext"
const Home = () => {
 const { isOpenModal } = useContext(ModalContext)
 console.log(isOpenModal)
 return (
  <div>
   <img className="absolute bg-cover bg-center h-96" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight />
   
   <SearchBar />
  
   <Choice />
    {isOpenModal}
   <List />
   
  
  </div>
 )
}

export default Home;