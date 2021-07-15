import React, { useState, useEffect }  from 'react';
import Header from '../components/Header'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'
import List from '../components/Home/List'
import axios from 'axios';
let link = "https://fakestoreapi.com/products?limit=9"


const Home = () => {
 
 const [items, setItems] = useState([])
 function getItems() {
  axios.get(link)
   .then(lists => setItems(lists))
   .then(console.log(items))
 }
 useEffect(() => {
  getItems()
  console.log(items)
  },[]);

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