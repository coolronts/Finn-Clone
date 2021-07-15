import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import { FaRegBell, FaPlus } from 'react-icons/fa';


const Header = () => {
 return (
  <nav class="backdrop-filter backdrop-blur-3xl flex justify-between px-24 text-white" >
   <div class="flex">
    <img class="w-32" src={logo}/> <div class="self-center">Mulighetenes marked</div>
   </div>
   <ul class="flex self-center text-xs">
    <li class="flex"><FaRegBell class="text-3xl" /> <span class="self-center">Varslinger</span> </li>
    <li class="flex"><FaPlus class="text-3xl ml-6" /> <span class="ml-1 self-center">Varslinger</span> </li>
   </ul>
  </nav>
 )
}
export default Header;