import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "cursor-pointer relative rounded-lg w-full h-full hover:bg-blue-50 p-2  ",
  icon:"absolute right-2 text-gray-500 text-3xl",
  picture: "w-full h-full rounded-lg",
  price:"absolute bottom-3 left-2 text-lg font-semibold text-red-600"
 }
 return (
  <div className={styles.main}>
   <HiOutlineHeart className={styles.icon}/>
   <img className={styles.picture} src={image} />
   <p className={styles.price}>{price}</p>
  </div>
 )
}

export default Card;