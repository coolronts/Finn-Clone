import React from "react";
import {CgFolder} from 'react-icons/cg'

const Modal = () => {
  return (
    <div className="h-screen w-screen bg-transparent flex justify-center items-center fixed top-0 bottom-0 left-0 right-0z-50">
      <div className="bg-green-400 w-1/4 h-1/2 p-4 shadow rounded-md">
        <CgFolder className="text-xl"/>
      </div>
    </div>
  );
};
export default Modal;
