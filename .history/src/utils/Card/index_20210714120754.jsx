import React from 'react';
import {FaHeart} from 'react-icons/fa';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "rounded-lg w-full h-full  ",
  picture:"w-full h-full "
 }
 return (
  <div className={styles.main}>
   <img className={styles.picture} src={image}/>
  </div>
 )
}

export default Card;