import React from 'react';
import Header from '../components/Header'
import Highlight from '../components/Highlight'
import SearchBar from '../utils/SearchBar'

const Home = () => {
 return (
  <div className="relative">
   <img className="absolute bg-cover bg-center h-96" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight />
   <SearchBar/>
  </div>
 )
}

export default Home;