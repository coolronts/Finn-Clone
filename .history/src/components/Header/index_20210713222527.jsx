import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
 return (
  <nav class="backdrop-filter backdrop-blur-3xl flex justify-between px-24" >
   <div class="flex">
    <img class="w-32" src={logo}/> <div class="text-white self-center">Mulighetenes marked</div>
   </div>
   <ul class="flex self-center">
    <li><FontAwesomeIcon icon={["fas", "bell"]} />sadasd</li>
   </ul>
  </nav>
 )
}
export default Header;