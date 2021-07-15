import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png'

const Header = () => {
 return (
  <nav class="backdrop-filter-blur flex ">
   <img class="w-32" src={logo}/> <div class="self-center text-white">Mulighetenes marked</div>
  </nav>
 )
}
export default Header;