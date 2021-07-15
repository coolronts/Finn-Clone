import React from 'react';
import {FaHome, FaCarSide, FaCouch, FaBriefcase, FaPlane, FaBicycle, FaShip, FaShuttleVan,FaPiggyBank,FaHeartbeat} from 'react-icons/fa';
const Choice = () => {
 const styles={
  main: "flex px-40 mt-12",
  optionsList:"w-4/5 grid grid-cols-4 grid-flow-row gap-8"
 }
 return (
  <div className={styles.main}>
   <div className={styles.optionsList}>
    <div className="text-2xl text-blue-400 text-center"><FaHome className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaCarSide className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaCouch className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaBriefcase className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaPlane className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaBicycle className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaShip className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaCarSide className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaShuttleVan className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaBriefcase className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-blue-400 text-center"><FaPiggyBank className="w-full"/><p className="text-lg">Eindom</p> </div>
    <div className="text-2xl text-center "><FaHeartbeat className="w-full text-red-500"/><p className="text-lg">Eindom</p> </div>
   </div>
   
  </div>
 )
}

export default Choice;