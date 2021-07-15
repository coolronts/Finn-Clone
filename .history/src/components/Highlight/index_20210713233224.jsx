import React from 'react';
import logo from '../../assets/logo.png';
import { FaRegBell, FaPlus, FaRocketchat, FaRegUser } from 'react-icons/fa';


const Highlight = () => {
 const styles = {
  body: "flex text-white relative px-40 mt-6 justify-between",
  leftContainer: "flex flex-col justify-between h-36",
  rightContainer:"flex flex-col justify-between h-36",
  title: "text-3xl font-bold",
  button: "bg-blue-600 text-center w-40 px-2 py-3 rounded ",
  adBox: "bg-white rounded",
  adTitle: "text-lg text-red-400",
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

   <div className={styles.rightContainer}>
    <div className={styles.adBox}>Utforsk hytter i Nor
      <p className={styles.adTitle}>Utforsk hytter i Norge</p>
    </div>
   </div>
  </div>
 )
}
export default Highlight;