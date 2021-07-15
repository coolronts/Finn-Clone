import React from 'react';

const SearchBar = () => {
 return (
  <div className="relative mt-16 bg-white px-36">
   <div className="w-full h-24 py-2 px-3 shadow-xl rounded-lg flex">
    <input className="border-2 border-black w-2/3 rounded-lg" type="search"  />
   </div>
  </div>
 )
}

export default SearchBar;