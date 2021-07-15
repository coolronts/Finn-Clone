import React from 'react';
import pic from '../../assets/loginPic.jpg'

const Card = () => {
 const styles = {
  main: "rounded-lg w-full h-full bg-red-400",
  picture:"w-full h-full bg-cover"
 }
 return (
  <div className={styles.main}>
   <img className={styles.picture} src={pic}/>
  </div>
 )
}

export default Card;