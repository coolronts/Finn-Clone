import React,{ createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({children}) => {
 const [isModal, setIsModal] = useState(1)
 return (
  <ModalContext.Provider value={{isModal, setIsModal}}>
   {children}
  </ModalContext.Provider>
 )
}