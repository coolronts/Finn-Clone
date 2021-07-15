import React from 'react';
import logo from '../../assets/logo.png';
import { FaRegBell, FaPlus, FaRocketchat, FaRegUser } from 'react-icons/fa';


const Highlight = () => {
 const ad = [
  {
   id: 1,
   image: "https://travel-images.finncdn.no/dynamic/320w/seo/fhh_kristiansand.jpg",
   adName: "Sørlandet",
   subTitle: "3000+ feriehus",
   redirect:"https://www.finn.no/reise/feriehus-hytteutleie/resultat/?no_of_beds_from=1&lat_sw=57.873792&lng_sw=5.033924&lat_ne=59.353313&lng_ne=10.078723&mobile=false&nrFUSAds=2&country=Norge&utm_source=frontpage_b&utm_medium=frontpage_test_click&utm_campaign=frontpage_experiment"
    
  },
  {
   id: 2,
   image: "https://travel-images.finncdn.no/dynamic/320w/seo/fhh_bergen.jpg",
   adName: "",
   subTitle: "",
   redirect:""
  },
  {
   id: 3,
   image: "https://travel-images.finncdn.no/dynamic/320w/seo/fhh_bergen.jpg",
   adName: "",
   subTitle: "",
   redirect:""
  },
  {
   id: 4,
   image: "https://travel-images.finncdn.no/dynamic/320w/seo/fhh_bergen.jpg",
   adName: "",
   subTitle: "",
   redirect:""
  },
 ]
 const styles = {
  body: "flex text-white relative px-40 mt-6 justify-between",
  leftContainer: "flex flex-col justify-between h-36",
  rightContainer:"flex flex-col justify-between h-36",
  title: "text-3xl font-bold",
  button: "bg-blue-600 text-center w-40 px-2 py-3 rounded ",
  adBox: "bg-white rounded px-2 py-4 text-sm tracking-tighter font-semibold",
  adTitle: " text-black",
  pictureAdContainer: "cursor-pointer flex px-6 py-5 h-full border-b-2 border-transparent hover:border-blue-300",
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
    <div className={styles.adBox}>
     <p className={styles.adTitle}>Utforsk hytter i Norge</p>
     <div className={styles.pictureAdContainer}></div>
    </div>
   </div>
  </div>
 )
}
export default Highlight;