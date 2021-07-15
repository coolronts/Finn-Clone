import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "cursor-pointer flex flex-col justify-between bg-white rounded-lg w-full h-full hover:bg-blue-50 p-2  ",
  imageContainer:"relative w-full",
  icon: "absolute top-2 right-3 text-white text-3xl",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price:"absolute bottom-0 text-lg font-semibold text-white px-2 w-full "
 }
 return (
  
  <div class={styles.main}>
   <div className={styles.imageContainer}>
    <img src="https://picsum.photos/1600/1200"  alt="" className=" rounded-lg"/>
    <HiOutlineHeart className={styles.icon} />
    <p className={styles.price}>{price}</p>
   </div>
   <h3 class=" text-gray-600 text-sm h-full mt-3 ">{title }</h3>
  </div>
 )
}

export default Card;