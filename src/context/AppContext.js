import React, {createContext, useState} from 'react';
import {useQuery} from 'react-query';
import {fetchData} from '../utils/utils'

const AppContext = createContext();

const ContextProvider = ({children})=>{
    const [section, setSection] = useState('Dashboard');

    const schoolsQuery = useQuery('schools', ()=>fetchData('trainingSchools'));
    const coursesQuery = useQuery('courseList', ()=>fetchData('courses'));
    const districtQuery = useQuery('districtList', ()=>fetchData('districts'));
    const contactsQuery = useQuery('contactsList', ()=>fetchData('contacts'));

    if(schoolsQuery.isLoading ||coursesQuery.isLoading || districtQuery.isLoading || contactsQuery.isLoading) return <h3>Loading...</h3>;

    if(schoolsQuery.error ||coursesQuery.error || districtQuery.error || contactsQuery.error) return <p>{`An error has occurred: ${coursesQuery.error || districtQuery.error || contactsQuery.error || schoolsQuery.error}`}</p>;
    

    function setCurrSection(section){
        setSection(section);
    }

    console.log(coursesQuery, 'context');
    return(
        <AppContext.Provider value={{section,coursesQuery,districtQuery,contactsQuery, schoolsQuery,setCurrSection}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    ContextProvider
}
export default AppContext

