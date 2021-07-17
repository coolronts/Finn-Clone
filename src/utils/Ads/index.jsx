import React,{useState}  from 'react';
import { FaLeaf } from "react-icons/fa"
import { BiUserCircle } from "react-icons/bi"
import downArrowIcon from "#assets/downarrow.png"

const Ads = () => {
  const styles = {
    main: "bg-blue-50 rounded-md px-1 flex py-4 items-center",
    userIcon: "text-5xl",
    LogginText: "w-1/2 text-center ml-1 mr-2",
    LogButton: "bg-white font-medium hover:bg-transparent border-2 hover:border-blue-700 text-blue-700 text-xs rounded-md p-1",
    messageButton: "bg-blue-600 w-full mt-3 mb-1 font-semibold  hover:bg-blue-800 text-white rounded-lg py-3 text-lg",
    mobile:"text-blue-600 text-xs mb-6",
    greenAd: "bg-green-100 px-6 py-4 rounded-lg",
    mainGreenAd:"w-full flex items-center justify-between",
    leafIcon: "text-3xl text-green-500 mr-2",
    greenAdText: "ml-2 w-4/5 text-left font-medium text-black rounded-lg py-3 text-base",
    greenAdSecondaryText: "text-xl",
    downArrowIcon: "transition duration-100 ease-in-out cursor-pointer w-6",
    isExtendedDownArrowIcon:"transition duration-100 ease-in-out transform rotate-180",
    extendedText: "text-base text-left",
    blueTextsContainer: "text-blue-600 text-lg mt-4",
    blueText: "font-thin hover:underline cursor-pointer"    
  }

  const [isExtended, setIsExtended] = useState(false)
  return(
    <>
      <div className={styles.main}>
        <BiUserCircle className={styles.userIcon}/>
        <p className={styles.LogginText}>Du må være logget inn for å se profilen</p>
        <button className={styles.LogButton}>Logg Inn</button>          
      </div>
      <button className={styles.messageButton}>Send Melding</button>
      <p className={styles.mobile}>Vis mobilnummer</p>
      <div className={styles.greenAd}>
        <div className={styles.mainGreenAd}>
          <FaLeaf className={styles.leafIcon}/>
          <p className={styles.greenAdText}>Denne varren sparer CO2 tilsvarende production av <p className={styles.greenAdSecondaryText}>95nye plastposer</p> </p>
          <img src={downArrowIcon} onClick={() => setIsExtended(!isExtended)} className={`${styles.downArrowIcon} ${isExtended ? styles.isExtendedDownArrowIcon:''}`} />
        </div>
        <p className={`${styles.extendedText} ${isExtended ? 'show':'hidden'} `}>Ved å kjøpe brukt i stedet for nytt, forlenger du varens livsløp og sparer utslipp forbundet med produksjon av en ny vare. <p>Les mer i <span className="text-blue-600">bruktmarkedsrapporten </span> </p>.</p>
      </div>
      
      <div className={styles.blueTextsContainer}>
        <p className={styles.blueText}>Få hjelp til frakt</p>
        <p className={styles.blueText}>Pris på lån</p>
      </div>
    </>
  )
}

export default Ads