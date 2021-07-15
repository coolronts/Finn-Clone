import React from 'react';
import Header from '../components/Header'
import Highlight from '../components/Highlight'
import SearchBar from '../utils/SearchBar'

const Home = () => {
 return (
  <div>
   <img className="absolute h-3/5" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight className="bg-red-600"/>
  </div>
 )
}

export default Home;