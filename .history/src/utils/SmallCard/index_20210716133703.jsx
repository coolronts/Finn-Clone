import React,{useContext,useState, useEffect} from 'react';
import { BiWalk } from 'react-icons/bi';
import { GrBus } from 'react-icons/gr';

import { ModalContext } from "../../Context/ModalContext";

const SmallCard = ({ detail, allImages}) => {
  const { setIsModal } = useContext(ModalContext);
  const styles = {
    main: "shadow-sm cursor-pointer flex flex-col bg-white rounded-lg w-full h-auto hover:bg-white py-2 px-4  ",
    imageContainer:"relative h-80 w-full",
    image:"rounded-lg w-full object-cover",
    icon: " absolute top-1.5 right-1.5 text-white text-3xl hover:opacity-100  ",
    iconContainer:"absolute top-1 right-1 z-10 rounded-full w-8 h-8 bg-transparent hover:opacity-50 hover:bg-gray-50",
    shadow: "bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black h-8 absolute bottom-0",
    price:"absolute -bottom-10 text-lg font-semibold text-white px-2 w-full",
    textContainer: "flex justify-between mt-16",
    city:"text-gray-600 text-xs",
    textIcon: "text-gray-600 text-2xl",
    title:"text-lg font-semibold"  
  }

  return (
    <div class={styles.main}>
      <p className="font-semibold text-gray-500">Kort gangavstand til offentlig transport</p>
      <div className="flex justify-between mt-2 text-gray-600 items-center">
        <p className="">Buss</p>
        <p> <BiWalk className="inline"/> 2 min</p>
      </div>

      <div className="flex justify-between mt-2 text-gray-600 items-center">
        <p className="">T-bane</p>
        <p> <BiWalk className="inline"/> 2 min</p>
      </div>

      <p className="text-blue-600 font-semibold mt-2">Mer om transport</p>
      <GrBus className="text-5xl bg-blue-300 text-right"/>
      
    </div>
  )
}

export default SmallCard;