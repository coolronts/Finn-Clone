import React from 'react';

const SearchBar = () => {
 return (
  <div className="relative z-10 mt-16 px-36">
   <div className=" w-full h-24 py-2 px-3 shadow-xl rounded-lg flex">
    <input className="border-2 border-black rounded-lg" type="search"  />
   </div>
  </div>
 )
}

export default SearchBar;