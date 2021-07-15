import { createContext } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = () => {
 return (
  <ModalContext.Provider>
   
  </ModalContext.Provider>
 )
}