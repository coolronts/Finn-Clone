import React, { useState, useEffect }  from 'react';
import Header from '../components/Header'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'
import List from '../components/Home/List'
import axios from 'axios';


const Home = () => {
 const [items, setItems] = useState(null);
 useEffect(() => {
  axios.get("https://www.finn.no/podium-resource/recommendations/match-ad/fetch/08224745091,08210882110,08224773212,08224850917,08202545197,08190869728?pos=m-frontpage_v2ads&uuid=9b9488e2-5415-4d5d-925e-d55e9b1b9527&recommenderId=mul-pop-thompzon",{
  mode: 'no-cors'
})
   .then(data=>console.log(data))
  
  });

 return (
  <div>
   <img className="absolute bg-cover bg-center h-96" src="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"/>
   <Header />
   <Highlight />
   <SearchBar />
   <Choice />
   <List/>
  </div>
 )
}

export default Home;