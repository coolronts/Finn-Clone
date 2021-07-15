import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "relative rounded-lg w-full h-full hover:bg-blue-50 p-2  ",
  icon:"absolute right-0 text-gray-300 text-3xl",
  picture:"w-full h-full rounded-lg"
 }
 return (
  <div className={styles.main}>
   <HiOutlineHeart className={styles.icon}/>
   <img className={styles.picture} src={image}/>
  </div>
 )
}

export default Card;