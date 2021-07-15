import React from 'react';
import logo from '../../assets/logo.png';
import { FaRegBell, FaPlus, FaRocketchat, FaRegUser } from 'react-icons/fa';


const Highlight = () => {
 const ads = [
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
   adName: "Vestlandet",
   subTitle: "4000+ feriehus",
   redirect:"https://www.finn.no/reise/feriehus-hytteutleie/resultat/?no_of_beds_from=1&lat_sw=58.390197&lng_sw=4.196777&lat_ne=63.312683&lng_ne=9.052734&mobile=false&nrFUSAds=2&utm_source=frontpage_b&utm_medium=frontpage_test_click&utm_campaign=frontpage_experiment"
  },
  {
   id: 3,
   image: "https://travel-images.finncdn.no/dynamic/320w/seo/fhh_lofoten.jpg",
   adName: "Nord-Norge",
   subTitle: "300+ feriehus",
   redirect:"https://www.finn.no/reise/feriehus-hytteutleie/resultat/?no_of_beds_from=1&lat_sw=65.783661&lng_sw=11.481331&lat_ne=71.281797&lng_ne=31.515731&mobile=false&nrFUSAds=2&country=Norge&utm_source=frontpage_b&utm_medium=frontpage_test_click&utm_campaign=frontpage_experiment"
  },
  {
   id: 4,
   image: "https://travel-images.finncdn.no/dynamic/320w/seo/fhh_hvaler.jpg",
   adName: "Østlandet",
   subTitle: "3000+ feriehus",
   redirect:"https://www.finn.no/reise/feriehus-hytteutleie/resultat/?no_of_beds_from=1&lat_sw=58.862563&lng_sw=8.503634&lat_ne=62.303781&lng_ne=13.036859&mobile=false&nrFUSAds=2&country=Norge&utm_source=frontpage_b&utm_medium=frontpage_test_click&utm_campaign=frontpage_experiment"
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
  adImage: "w-8 h-8 rounded",
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
     <div className={styles.pictureAdContainer}>
      {ads.map(ad =>
        <img className={styles.adImage} src={ad.image}/>
       )}

     </div>
    </div>
   </div>
  </div>
 )
}
export default Highlight;