import React from 'react';
import {HiOutlineHeart} from 'react-icons/hi';


const Card = ({id, title, price,image}) => {
 const styles = {
  main: "cursor-pointer relative bg-white  rounded-lg w-full h-full hover:bg-blue-50 p-2  ",
  icon:"absolute top-2 right-3 text-white text-3xl",
  picture: "",
  shadow:"bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black  h-8 absolute bottom-0",
  price:"text-lg font-semibold text-white px-2 w-full"
 }
 return (
  
  <div class={styles.main}>
   
     <img src="https://picsum.photos/1600/1200"  alt=""class="object-cover h-full  rounded-lg"/>
       <HiOutlineHeart className={styles.icon}/>
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Tour the City</h3>
          <div class="mt-5">
            <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
          </div>
    </div>
   </div>
 )
}

export default Card;