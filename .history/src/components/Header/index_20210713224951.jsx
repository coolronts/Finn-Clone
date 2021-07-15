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
  li: "flex ml-6",
  icon: "text-3xl",
  menuName:"ml-1 self-center",
 }
 return (
  <nav className={styles.nav} >
   <div className={styles.logoContainer}>
    <img className={styles.logo} src={logo} />
    <div className={styles.logoName}>Mulighetenes marked</div>
   </div>
   <ul className={styles.menuContainer}>
    <li className={styles.li}><FaRegBell className={styles.icon} /> <span className={styles.menuName}>Varslinger</span> </li>
    <li className={styles.li}><FaPlus className={styles.icon} /> <span className={styles.menuName}>Varslinger</span> </li>
   </ul>
  </nav>
 )
}
export default Header;