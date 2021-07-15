import React, { useState, useEffect }  from 'react';
import Header from '../components/Header'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'
import List from '../components/Home/List'
import axios from 'axios';



const Home = () => {
 
 const [items, setItems] = useState(0)
 useEffect(() => {
  axios.get("https://fakestoreapi.com/products?limit=9")
   .then(data => this.setState(data))
  .then(console.log(this.state.items))
  
  },[this.state.items]);

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