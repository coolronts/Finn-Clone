import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = () => {
 return (
  <div className="relative mt-20  px-36">
   <div className="w-full h-16 bg-white py-2 px-3 shadow-xl rounded-lg flex justify-around ">
    <input className="border-2 border-gray-200 outline-none w-4/5 rounded-lg" type="search" placeholder="Sok etter IPhone eller fjordhest"/>
    <div className="flex">
     <FaMapMarkerAlt className="self-center text-2xl text-red-400"/>
     <p className="self-center text-2xl font-semibold">Finn Kart </p>
    </div>
   </div>
  </div>
 )
}

export default SearchBar;