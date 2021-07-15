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
  <div>
  <div class="relative items-center justify-center">
    <!-- Header Text-->
    <h1 class="text-center text-2xl font-bold p-4 bg-gray-800 text-gray-400">Choose Your Next Adventure</h1>
    <!-- All Cards Container -->
    <div class="lg:flex items-center container mx-auto my-auto">

      <!-- Card 1 -->
      <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
        <!-- Card Image -->
        <img src="https://picsum.photos/id/29/2106/1404" alt=""class="overflow-hidden">
        <!-- Card Content -->
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Climb the Mountains</h3>
          <p class="text-justify">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
          <div class="mt-5">
            <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
        <!-- Card Image -->
        <img src="https://picsum.photos/id/247/2106/1404" alt=""class="overflow-hidden">
        <!-- Card Content -->
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Explore the Desert</h3>
          <p class="text-justify">Rapping wind chamber have was has, is all of thy stood chamber his bore. Nameless or as door tapping both thy grew lenore. We my still respiterespite lie, with lordly.</p>
          <div class="mt-5">
            <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
        <!-- Card Image -->
        <img src="https://picsum.photos/id/342/2106/1404" alt=""class="overflow-hidden">
        <!-- Card Content -->
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Tour the City</h3>
          <p class="text-justify">Upon but that objects tis sore would what. Who formed in coffined heartless shades, there mine was heart vast flaunting he low relief uncouth, dear and and but suffice ofttimes.</p>
          <div class="mt-5">
            <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="mt-10 bottom-0 text-center">
      <h4 class="text-sm font-semibold text-gray-600 "> &COPY; 2021 CORE-UI</h4>
    </div>
  </div>
</div>
 )
}

export default Card;