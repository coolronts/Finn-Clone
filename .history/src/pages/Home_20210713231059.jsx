import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header'
import Highlight from '../components/Highlight'

const Home = () => {
 return (
  <div>
   <img className="absolute" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight/>
  </div>
 )
}

export default Home;