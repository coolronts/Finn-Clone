import React from 'react';
import logo from '../../assets/logo.png';
import { FaRegBell, FaPlus, FaRocketchat, FaRegUser } from 'react-icons/fa';


const Highlight = () => {
 const styles = {
  body: "flex text-white relative px-36 mt-6",
  leftContainer:"flex flex-col bg-red-500 justify-around",
  title: "text-3xl font-bold",
  button: "bg-blue-800 text-center w-48 px-6 py-3 rounded ",
  logoName: "text-xs self-center",
  menuContainer: "flex h-full self-center text-xs",
  li: "cursor-pointer flex px-6 py-5 h-full border-b-2 border-transparent hover:border-blue-300",
  icon: "text-3xl",
  menuName:"ml-1 self-center",
 }
 return (
  <div className={styles.body}>
   <div className={styles.leftContainer}>
    <p className={styles.title}>Norgesferien</p>
    <p>Smarte tips og inspirasjon til årets ferie i Norge.</p>
    <div className={styles.button}>Book norgesferien</div>
   </div>
  </div>
 )
}
export default Highlight;