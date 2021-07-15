import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import { FaRegBell, FaPlus } from 'react-icons/fa';


const Header = () => {
 const styles = {
  nav: "backdrop-filter backdrop-blur-3xl flex justify-between px-24 text-white",
  logoContainer: "flex",
  logo: "w-32",
  logoName: "text-xs self-center",
  menuContainer: "flex self-center text-xs",
  li: "flex",
  icon:"3xl",
 }
 return (
  <nav class={styles.nav} >
   <div class={styles.logoContainer}>
    <img class={styles.logo} src={logo} />
    <div class={styles.logoName}>Mulighetenes marked</div>
   </div>
   <ul class={styles.menuContainer}>
    <li className={styles.li}><FaRegBell className={styles.icon} /> <span class="ml-1 self-center">Varslinger</span> </li>
    <li class="flex"><FaPlus class="text-3xl ml-6" /> <span class="ml-1 self-center">Varslinger</span> </li>
   </ul>
  </nav>
 )
}
export default Header;