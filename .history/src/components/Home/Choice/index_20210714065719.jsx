import React from 'react';
import {FaHome, FaCarSide, FaCouch, FaBriefcase, FaPlane, FaBicycle, FaShip, FaShuttleVan,FaPiggyBank,FaHeartbeat} from 'react-icons/fa';
const Choice = () => {
 const styles={
  main: "flex px-40 mt-12",
  optionsList: "w-4/5 grid grid-cols-4 grid-flow-row gap-8",
  option: "text-2xl text-blue-400 text-center",
  icon:"w-full",
 }
 return (
  <div className={styles.main}>
   <div className={styles.optionsList}>
    <div className={styles.option}><FaHome className=""/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaCarSide className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaCouch className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaBriefcase className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaPlane className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaBicycle className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaShip className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaCarSide className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaShuttleVan className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaBriefcase className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaPiggyBank className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className={styles.option}><FaHeartbeat className="w-full text-red-500"/><p className="text-lg">Eindom</p> </div>
   </div>
   
  </div>
 )
}

export default Choice;