import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png'

const Header = () => {
 return (
  <nav class="backdrop-filter backdrop-blur-3xl flex  justify-between" >
   <div class="flex">
    <img class="w-32" src={logo}/> <div class="self-center text-white">Mulighetenes marked</div>
   </div>
   <div class="flex">He</div>
  </nav>
 )
}
export default Header;