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
  
    <div class="p-56">
  <div class="w-96 m-auto ">
      <div
    class=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <div class="col-span-3 row-span-4 p-1 m-1">
      <a href="#">
        <img
          src="https://picsum.photos/640/400/?random"
          alt="Placeholder"
          class="rounded-t-xl object-cover h-48 w-full"
        />
      </a>
    </div>

    <div class="col-span-3 row-span-1">
      <div class="flex align-bottom flex-col leading-none p-2 md:p-4">
        <div class="flex flex-row justify-between items-center">
          <a
            class="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              class="block rounded-full"
              src={image}
            />
            <span class="ml-2 text-sm"> John Doe </span>
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-3 row-span-1">
      <header
        class="flex items-center justify-between leading-tight p-2 md:p-4"
      >
        <h1 class="text-lg">
          <a class="no-underline hover:underline text-black" href="#">
            Title
          </a>
        </h1>
        <p class="text-grey-darker text-sm">9 min ago</p>
      </header>
    </div>

    
  </div>
</div>
</div>
 )
}

export default Card;