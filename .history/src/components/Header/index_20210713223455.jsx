import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import { FaRegBell } from 'react-icons/fa';


const Header = () => {
 return (
  <nav class="backdrop-filter backdrop-blur-3xl flex justify-between px-24 text-white" >
   <div class="flex">
    <img class="w-32" src={logo}/> <div class="self-center">Mulighetenes marked</div>
   </div>
   <ul class="flex self-center ">
    <li class=""><FaRegBell /></li>
   </ul>
  </nav>
 )
}
export default Header;