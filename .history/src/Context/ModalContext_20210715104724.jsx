import React,{ createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({children}) => {
 const [isOpenModal, setIsOpenModal] = useState("asad")
 return (
  <ModalContext.Provider value="adasd">
   {children}
  </ModalContext.Provider>
 )
}