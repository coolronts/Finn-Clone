import React from 'react';
import { BiWalk, BiBus } from 'react-icons/bi';

const SmallCard = () => {
  const styles = {
    main: "shadow-lg cursor-pointer flex flex-col bg-white rounded-lg w-full h-auto hover:bg-white px-4  py-6 ",
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
    <div data-cy="smallCard" class={styles.main}>
      <p className="font-semibold text-sm  text-left text-gray-500">Kort gangavstand til offentlig transport</p>
      <div className="flex justify-between mt-2 text-xs text-gray-600 items-center">
        <p className="">Buss</p>
        <p> <BiWalk className="inline"/> 2 min</p>
      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-600 items-center">
        <p className="">T-bane</p>
        <p> <BiWalk className="inline"/> 2 min</p>
      </div>

      <p className="text-blue-600 font-semibold mt-2 text-base">Mer om transport</p>
      <div>
        <BiBus className="text-5xl text-yellow-300 float-right"/>
      </div>
      
      
    </div>
  )
}

export default SmallCard;