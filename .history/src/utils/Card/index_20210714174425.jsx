import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "cursor-pointer bg-white  rounded-lg w-full h-full hover:bg-blue-50 p-2  ",
  icon:"absolute right-2 text-gray-500 text-3xl",
  picture: "object-contain h-48  rounded-lg",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price:"text-lg font-semibold text-white px-2 w-full"
 }
 return (
  <div className="w-full h-full flex flex-col justify-between">
   <div className="h-4/5 w-full">
    <img src={image}   className="object-contain h-4/5" alt="Product Picture" />
   </div>
   <div className="">
    <p>{title}</p>
   </div>

  </div>
 )
}

export default Card;