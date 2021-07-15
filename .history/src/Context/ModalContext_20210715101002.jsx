import { createContext } from 'react';
export const ModalsContext = createContext();

const ModalsConetextProvider = (props) => {
        // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState();

    return (
                // this is the provider providing state
        <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;
