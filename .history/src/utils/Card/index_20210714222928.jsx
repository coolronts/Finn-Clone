import React,{useEffect, useState} from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({ id, title, price }) => {
 const [image,setImage] = useState(null)
 
 async function getImage() {
  fetch("https://picsum.photos/800/1000")
 }

 useEffect(() => {
  getImage()
 },[])
 const styles = {
  main: "shadow-sm cursor-pointer flex flex-col bg-white rounded-lg w-full h-auto  hover:bg-blue-50 p-2  ",
  imageContainer:"relative h-80 w-full",
  icon: "absolute top-2 right-3 text-white text-3xl",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price:"absolute -bottom-10 text-lg font-semibold text-white px-2 w-full "
 }
 return (
  
  <div class={styles.main}>
   <div className={styles.imageContainer}>
    <img src=""  alt="" className="object-cover rounded-lg"/>
    <HiOutlineHeart className={styles.icon} />
    <p className={styles.price}>{price} Kr</p>
   </div>
   <h3 class=" text-gray-600 text-sm  mt-16 ">Fajna</h3>
   <p className="text-lg font-semibold">Skirt</p>   
  </div>
 )
}

export default Card;