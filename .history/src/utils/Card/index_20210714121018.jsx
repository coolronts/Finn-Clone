import React from 'react';
import {FaHeart} from 'react-icons/fa';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "relative rounded-lg w-full h-full  ",
  icon:"absolute right-0 border-black border-2 text-transparent",
  picture:"w-full h-full "
 }
 return (
  <div className={styles.main}>
   <FaHeart className={styles.icon}/>
   <img className={styles.picture} src={image}/>
  </div>
 )
}

export default Card;