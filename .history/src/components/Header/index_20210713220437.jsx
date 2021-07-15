import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png'

const Header = () => {
 return (
  <nav class="bg-red-300 flex ">
   <img class="w-32" src={logo}/> <div class="self-center">Mulighetenes marked</div>
  </nav>
 )
}
export default Header;