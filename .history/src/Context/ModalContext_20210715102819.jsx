import React, from "react";{ createContext } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = (props) => {
 return (
  <ModalContext.Provider>
   {props.children}
  </ModalContext.Provider>
 )
}