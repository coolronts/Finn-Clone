import React from 'react';

const SearchBar = () => {
 return (
  <div className="relative mt-20  px-36">
   <div className="w-full h-20 bg-white py-2 px-3 shadow-xl rounded-lg flex">
    <input className="border-2 border-black w-3/4 rounded-lg" type="search" />
   </div>
  </div>
 )
}

export default SearchBar;