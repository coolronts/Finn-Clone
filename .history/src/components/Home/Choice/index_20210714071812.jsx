import React from 'react';
import loginPic from '../../../assets/loginPic.jpg';
import {FaHome, FaCarSide, FaCouch, FaBriefcase, FaPlane, FaBicycle, FaShip, FaShuttleVan,FaPiggyBank,FaHeartbeat,FaHandshake} from 'react-icons/fa';
const Choice = () => {
 const styles={
  main: "flex px-40 mt-12",
  optionsList: "w-6/7 grid grid-cols-4 grid-flow-row gap-6",
  option: "text-2xl text-center",
  icon: "w-full text-blue-400",
  iconText: "text-sm",
  logInAd: "w-full pl-12",
  logInBody: "bg-blue-50 rounded-md shadow-sm p-4 w-full h-full text-center",
 }
 return (
  <div className={styles.main}>
   <div className={styles.optionsList}>
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
    <div className={styles.option}><FaHeartbeat className="w-full text-red-500"/><p className={styles.iconText}>Moteplassen</p> </div>
    <div className={styles.option}><FaHandshake className="w-full text-yellow-500"/><p className={styles.iconText}>Nettbil</p> </div>
   </div>
   
   <div className={styles.logInAd}>
    <div className={styles.logInBody}>
     <div className="w-full text-center bg-red-300">
      <img src={loginPic} className="w-40" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Choice;