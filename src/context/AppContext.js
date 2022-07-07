import React, {createContext, useState} from 'react';

const AppContext = createContext();

const ContextProvider = ({children})=>{
    const [section, setSection] = useState('Dashboard');

    function setCurrSection(section){
        setSection(section);
    }

    return(
        <AppContext.Provider value={{section,setCurrSection}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    ContextProvider
}
export default AppContext

