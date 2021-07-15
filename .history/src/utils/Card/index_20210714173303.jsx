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
  <body class="bg-gray-100">
    <div class="flex justify-between m-6">
        <div class="flex flex-col h-full max-w-lg mx-auto bg-white p-2 rounded-lg shadow-lg">
            <div class="rounded-lg flex flex-col justify-center px-8" style="background-image: url(https://source.unsplash.com/6lKf8vmsjQs/400x500); height: 500px; width: auto; background-size: cover">
             
                <div class="flex justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-full text-center p-4 mt-2">
                    <span class="text-white text-lg font-semibold">
                        Hello World! This is a transparent blurry alert!
                    </span>
                </div>
                
            </div>
            <h2 class="text-2xl font-light text-gray-800">Some Thing</h2>
            <p class="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, sed? Ducimus nobis magni hic consequuntur. Aliquam quis debitis, inventore nesciunt ipsam eveniet iste dolores exercitationem dolore, consequatur autem repudiandae cumque.
            </p>

        </div>
    </div>
</body>
 )
}

export default Card;