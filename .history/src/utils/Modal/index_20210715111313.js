import React from "react";
import {CgFolder} from 'react-icons/cg'

const Modal = () => {
  return (
    <div className="h-screen w-screen bg-transparent flex justify-center items-center fixed top-0 bottom-0 left-0 right-0z-50">
      <div className="bg-green-400 w-1/4  p-4 shadow justify-center items-center flex flex-col rounded-md">
        <CgFolder className="text-5xl text-center" />
        <p className="mt-6 text-center">Logg inn for å legge annonsen i dine favorittlister. Da kan du lett finne de igjen senere, uansett hvor du er.</p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-center font-semibold w-full px-2 py-3 rounded-lg mt-3  text-white"> Logg Inn</button>
          <button className="bg-blue-600 text-center font-semibold w-full px-2 py-3 rounded-lg mt-3  text-white"> Logg Inn</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
