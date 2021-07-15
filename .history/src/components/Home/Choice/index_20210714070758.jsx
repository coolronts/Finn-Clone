import React from 'react';
import {FaHome, FaCarSide, FaCouch, FaBriefcase, FaPlane, FaBicycle, FaShip, FaShuttleVan,FaPiggyBank,FaHeartbeat,FaHandshake} from 'react-icons/fa';
const Choice = () => {
 const styles={
  main: "flex px-40 mt-12",
  optionsList: "w-6/7 grid grid-cols-4 grid-flow-row gap-8",
  option: "text-2xl text-center",
  icon: "w-full text-blue-400",
  iconText: "text-lg",
  logInAd:"w-full"
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

   </div>
  </div>
 )
}

export default Choice;