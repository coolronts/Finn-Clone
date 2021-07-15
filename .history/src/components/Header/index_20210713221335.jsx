import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png'

const Header = () => {
 return (
  <nav class="backdrop-filter backdrop-blur-3xl flex " >
   <div class="flex">
    <img class="w-32" src={logo}/> <div class="self-center text-white">Mulighetenes marked</div>
   </div>
  </nav>
 )
}
export default Header;