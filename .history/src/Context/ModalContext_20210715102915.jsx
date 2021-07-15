import React,{ createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = (props) => {
 const [isOpenModal, setIsOpenModal] = useState(false)
 return (
  <ModalContext.Provider>
   {props.children}
  </ModalContext.Provider>
 )
}