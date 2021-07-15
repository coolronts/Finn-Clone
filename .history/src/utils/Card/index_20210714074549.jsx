import React from 'react';
import pic from '../../../assets/loginPic.jpg'

const Card = () => {
 const styles = {
  main:"rounded-lg w-full"
 }
 return (
  <div className={styles.main}>
   <img src={pic}/>
  </div>
 )
}

export default Card;