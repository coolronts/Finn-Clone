import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = () => {
 return (
  <div className="relative mt-20  px-36">
   <div className="w-full h-20 bg-white py-2 px-3 shadow-xl rounded-lg flex ">
    <input className="border-2 border-black w-4/5 rounded-lg" type="search" />
    <FaMapMarkerAlt className="self-center text-xl"/>
    <p className="self-center text-2xl font-semibold">Finn Kart </p>
   </div>
  </div>
 )
}

export default SearchBar;