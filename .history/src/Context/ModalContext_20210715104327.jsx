import React,{ createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({children}) => {
 const [isOpenModal, setIsOpenModal] = useState(false)
 return (
  <ModalContext.Provider value={isOpenModal,setIsOpenModal}>
   
  </ModalContext.Provider>
 )
}