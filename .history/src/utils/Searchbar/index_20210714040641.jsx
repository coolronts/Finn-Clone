import React from 'react';

const SearchBar = () => {
 return (
  <div className="relative mt-24  px-36">
   <div className="w-full bg-red-400 h-18 shadow-xl rounded-lg flex">
    <input className="outline-black w-2/3" type="search"  />
   </div>
  </div>
 )
}

export default SearchBar;