import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "cursor-pointer flex flex-col rounded-lg w-full h-full hover:bg-blue-50 p-2",
  imageContainer:"relative h-4/5",
  icon:"absolute right-2 text-gray-500 text-3xl",
  picture: "w-full  rounded-lg",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price: "text-lg font-semibold text-white px-2 w-full",
  title:"h-full"
 }
 return (
  <div className={styles.main}>
   <div className={styles.imageContainer}>
    <HiOutlineHeart className={styles.icon}/>
   <img className={styles.picture} src={image} />
   
   </div>
   
   <p className={styles.title}>{title}</p>
  </div>
 )
}

export default Card;