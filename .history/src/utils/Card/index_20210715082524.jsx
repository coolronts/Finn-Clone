import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import {AiOutlineDash} from 'react-icons/ai'


const Card = ({ id, title, price }) => {
 const styles = {
  main: "shadow-sm cursor-pointer flex flex-col bg-white rounded-lg w-full h-auto hover:bg-blue-50 p-2  ",
  imageContainer:"relative h-80 w-full",
  icon: "absolute top-2 right-3 text-white text-3xl rounded-full w-6 h-6 hover:bg-gray-50 ",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price:"absolute -bottom-10 text-lg font-semibold text-white px-2 w-full "
 }
 return (
  <div class={styles.main}>
   <div className={styles.imageContainer}>
    <img src="https://picsum.photos/id/237/800/1000"  alt="" className="object-cover rounded-lg"/>
    <HiOutlineHeart className={styles.icon} />
    <p className={styles.price}>{price} Kr</p>
   </div>
   <div className="flex justify-between mt-16">
    <h3 class=" text-gray-600 text-xs ">Porsgrunn</h3>
    <AiOutlineDash className="text-gray-600 text-2xl"/>
   </div>
   <p className="text-lg font-semibold">Dog</p>
  </div>
 )
}

export default Card;