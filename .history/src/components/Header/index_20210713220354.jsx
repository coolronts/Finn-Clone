import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png'

const Header = () => {
 return (
  <nav class="bg-red-300">
   <img class="w-32" src={logo}/> <span>ulighetenes marked</span>
  </nav>
 )
}
export default Header;