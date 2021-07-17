import React from 'react';
import logo from '#assets/logo.png';
import { FaRegBell, FaPlus, FaRocketchat, FaRegUser } from 'react-icons/fa';

const Header = () => {
  const styles = {
    nav: "backdrop-filter backdrop-blur-3xl flex justify-between px-36 text-white",
    logoContainer: "flex",
    logo: "w-32 h-10 self-center mr-1",
    logoName: "text-xs self-center",
    menuContainer: "flex h-full self-center text-xs",
    li: "cursor-pointer flex px-6 py-5 h-full border-b-2 border-transparent hover:border-blue-300",
    icon: "text-2xl",
    menuName: "ml-1 self-center",
    underlay: "absolute top-0 left-0 h-full w-screen bg-blue-400"
  }
  return (
    <div className="relative">
      <div className={styles.underlay}/>
      <nav className={styles.nav} >
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} />
          <div className={styles.logoName}>Mulighetenes marked</div>
        </div>
        <ul className={styles.menuContainer}>
          <li className={styles.li}><FaRegBell className={styles.icon} /> <span className={styles.menuName}>Varslinger</span> </li>
          <li className={styles.li}><FaPlus className={styles.icon} /> <span className={styles.menuName}>Ny anonse</span> </li>
          <li className={styles.li}><FaRocketchat className={styles.icon} /> <span className={styles.menuName}>Meldinger</span> </li>
          <li className={styles.li}><FaRegUser className={styles.icon} /> <span className={styles.menuName}>Logg inn</span> </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header;