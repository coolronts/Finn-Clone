import React from 'react';
import {FaHome, FaCarSide, FaCouch, FaBriefcase, FaPlane, FaBicycle, FaShip, FaShuttleVan,FaPiggyBank,FaHeartbeat} from 'react-icons/fa';
const Choice = () => {
 const styles={
  main: "flex px-40 mt-12",
  optionsList: "w-4/5 grid grid-cols-4 grid-flow-row gap-8",
  option: "text-2xl text-center",
  icon: "w-full text-blue-400",
  iconText:"text-lg"
 }
 return (
  <div className={styles.main}>
   <div className={styles.optionsList}>
    <div className={styles.option}><FaHome className={styles.icon}/><p className={styles.iconText}>Eindom</p> </div>
    <div className={styles.option}><FaCarSide className={styles.icon}/><p className="">Eindom</p> </div>
    <div className={styles.option}><FaCouch className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaBriefcase className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaPlane className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaBicycle className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaShip className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaCarSide className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaShuttleVan className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaBriefcase className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaPiggyBank className={styles.icon}/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaHeartbeat className="w-full text-red-500"/><p className="text-lg">Eindom</p> </div>
   </div>
   
  </div>
 )
}

export default Choice;