import React, {useContext} from "react";
import { CgFolder } from 'react-icons/cg';
import { ModalContext } from "../../Context/ModalContext";

const Modal = () => {
  const styles = {
    main: "h-screen w-screen bg-transparent flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-50",
    body: "bg-white w-1/4 p-4 shadow justify-center items-center flex flex-col rounded-md",
    icon: "text-5xl text-center",
    primaryText: "mt-6 text-center",
    buttonContainer: "flex justify-around",
    primaryButton: "bg-blue-600 hover:bg-blue-700 text-center font-semibold px-2 py-3 rounded-lg mt-3 text-white mr-3",
    secondaryButton: "bg-white hover:bg-blue-50 text-center font-semibold  px-2 py-3 rounded-lg mt-3  text-blue-600"
    
  }
  const {setIsModal} = useContext(ModalContext)
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <CgFolder className={styles.icon} />
        <p className={styles.primaryText}>Logg inn for å legge annonsen i dine favorittlister. Da kan du lett finne de igjen senere, uansett hvor du er.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}> Logg Inn</button>
          <button onClick={()=>setIsModal(false)}  className={styles.secondaryButton}> Ikke na</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
