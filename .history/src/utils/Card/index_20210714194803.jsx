import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "relative cursor-pointer flex flex-col bg-white rounded-lg w-full h-full mb-12 hover:bg-blue-50 p-2  ",
  imageContainer:"relative h-80 w-full",
  icon: "absolute top-2 right-3 text-white text-3xl",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price:"absolute -bottom-10 text-lg font-semibold text-white px-2 w-full "
 }
 return (
  
  <div class={styles.main}>
   <div className={styles.imageContainer}>
    <img src="https://picsum.photos/800/1000"  alt="" className="object-fit rounded-lg"/>
    <HiOutlineHeart className={styles.icon} />
    <p className={styles.price}>{price} Kr</p>
   </div>
   <h3 class=" absolute bottom-5 text-gray-600 text-sm h-full mt-12 ">{title }</h3>
  </div>
 )
}

export default Card;