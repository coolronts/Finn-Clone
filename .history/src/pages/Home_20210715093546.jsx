import React, { useState, createContext }  from 'react';
import Header from '../components/Header'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'
import List from '../components/Home/List'
import Modal from "../utils/Modal"

const Home = () => {
 const modalContext = createContext
 const [isOpenModal, setIsOpenModal] = useState(false)
 return (
  <div>
   <img className="absolute bg-cover bg-center h-96" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight />
   <SearchBar />
   <Choice />
   <List isOpenModal={isOpenModal} />
   {!isOpenModal &&  <Modal/>}
  
  </div>
 )
}

export default Home;