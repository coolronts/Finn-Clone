import { createContext , useState} from 'react';
export const ModalContext = createContext();

const modalContextProvider = (props) => {
        // this state will be shared with all components 
    const [isOpenModal,setIsOpenModal] = useState();

    return (
                // this is the provider providing state
        <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;
