import React, { useContext }  from 'react';
import Header from '#components/Header'
import Highlight from '#components/Home/Highlight'
import SearchBar from '#utils/SearchBar'
import Choice from '#components/Home/Choice'
import List from '#components/Shared/List'
import Modal from "#utils/Modal"
import {ModalContext} from "#context/ModalContext"

const Home = () => {
  const {isModal} = useContext(ModalContext)

  return (
    <div>
      <img className="absolute bg-cover bg-center h-96" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
      <Header />
      <Highlight />
      <SearchBar />
      <Choice />
      <List />
      {isModal && <Modal/>}
    </div>
  )
}

export default Home;