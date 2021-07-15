import React, { useState, useEffect }  from 'react';
import Header from '../components/Header'
import Highlight from '../components/Home/Highlight'
import SearchBar from '../utils/SearchBar'
import Choice from '../components/Home/Choice'
import List from '../components/Home/List'

const Home = () => {
 const [count, setCount] = useState(0);
 useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
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