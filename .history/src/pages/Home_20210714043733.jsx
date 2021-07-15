import React from 'react';
import Header from '../components/Header/index'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'

const Home = () => {
 return (
  <div>
   <img className="absolute bg-cover bg-center h-96" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight />
   <SearchBar />
   <Choice/>
  </div>
 )
}

export default Home;