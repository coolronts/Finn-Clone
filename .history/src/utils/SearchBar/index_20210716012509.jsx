import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const styles = {
    main: "relative mt-20  px-36",
    container: "w-full h-20 bg-white py-2 px-3 shadow-xl rounded-lg flex justify-around",
    inputContainer: "w-4/5 relative self-center",
    input: "text-2xl font-lighter px-2 py-1 border-2 border-gray-200 outline-none w-full rounded-lg",
    icon: "absolute right-3 top-3",
    textContainer: "self-center text-2xl text-red-400",
    
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input className={styles.input} type="search" placeholder="Sok etter IPhone eller fjordhest" />
          <FaSearch className={styles.icon}/>
        </div>
        <div className="flex">
          <FaMapMarkerAlt className={styles.textContainer}/>
          <p className="self-center text-2xl font-semibold">Finn Kart </p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;