import React from 'react';
import pic from '../../assets/loginPic.jpg'

const Card = ({id, title, price,image}) => {
 const styles = {
  main: "rounded-lg w-full h-full  ",
  picture:"w-full h-full bg-cover"
 }
 return (
  <div className={styles.main}>
   <img className={styles.picture} src={image}/>
  </div>
 )
}

export default Card;