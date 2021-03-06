import React from 'react';
import loginPic from 'assets/loginPic.jpg';
import {FaHome, FaCarSide, FaCouch, FaBriefcase, FaPlane, FaBicycle, FaShip, FaShuttleVan,FaPiggyBank,FaHeart,FaHandshake} from 'react-icons/fa';

const Choice = () => {
  const styles={
    main: "flex px-40 mt-12",
    optionsList: "w-6/7 grid grid-cols-4 grid-flow-row gap-6",
    option: "text-2xl text-center cursor-pointer",
    icon: "w-full text-blue-400 hover:text-blue-800",
    iconText: "text-sm",
    logInAd: "w-full pl-12",
    logInBody: "bg-blue-50 rounded-md shadow-sm py-8 px-10 w-full h-full flex flex-col justify-evenly items-center",
    loginTitle: "text-md font-semibold",
    loginSubtitle: "text-md text-center",
    button: "bg-blue-600 hover:bg-blue-800 text-center font-semibold w-full px-2 py-3 rounded-lg mt-3  text-white",
    loginFootnote: "text-sm text-center mt-1",
    schibsted: "text-xs text-blue-600 mt-2"
  }
 
  return (
    <div data-cy="Choice" className={styles.main}>
      <div data-cy="Options" className={styles.optionsList}>
        <div className={styles.option}><FaHome className={styles.icon}/><p className={styles.iconText}>Eindom</p> </div>
        <div className={styles.option}><FaCarSide className={styles.icon}/><p className={styles.iconText}>Bil og Naering</p> </div>
        <div className={styles.option}><FaCouch className={styles.icon}/><p className={styles.iconText}>Torget</p> </div>
        <div className={styles.option}><FaBriefcase className={styles.icon}/><p className={styles.iconText}>Jobb</p> </div>
        <div className={styles.option}><FaPlane className={styles.icon}/><p className={styles.iconText}>Reise</p> </div>
        <div className={styles.option}><FaBicycle className={styles.icon}/><p className={styles.iconText}>MC</p> </div>
        <div className={styles.option}><FaShip className={styles.icon}/><p className={styles.iconText}>Bat</p> </div>
        <div className={styles.option}><FaCarSide className={styles.icon}/><p className={styles.iconText}>Mittanbud</p> </div>
        <div className={styles.option}><FaShuttleVan className={styles.icon}/><p className={styles.iconText}>Bilabotenmet</p> </div>
        <div className={styles.option}><FaPiggyBank className={styles.icon}/><p className={styles.iconText}>Okonomi</p> </div>
        <div className={styles.option}><FaHeart className="w-full text-red-500"/><p className={styles.iconText}>Moteplassen</p> </div>
        <div className={styles.option}><FaHandshake className="w-full text-yellow-500"/><p className={styles.iconText}>Nettbil</p> </div>
      </div>
  
      <div data-cy="adContainer" className={styles.logInAd}>
        <div className={styles.logInBody}>
          <img src={loginPic} className="w-40" alt="login" />
          <p className={styles.loginTitle}>F?? mer ut av FINN</p>
          <p className={styles.loginSubtitle}>F?? varsler, send meldinger, legg til favoritter eller lagre s??kene dine.</p>
          <button className={styles.button}>Logg inn</button>
          <p className={styles.loginFootnote}>FINN.no er en del av Schibsted. Schibsted er ansvarlig for dine data p?? denne siden.</p>
          <p  className={styles.schibsted}>Les mer om personvern hos Schibsted</p>
        </div>
      </div>
    </div>
  )
}

export default Choice;