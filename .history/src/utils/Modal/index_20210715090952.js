import React from "react";

const Modal = ({isOpen}) => {
 return <div className="h-screen absolute top-50 right-50 z-50">
   {isOpen && <div>asdasdad</div>}
  </div>;
};
export default Modal;
