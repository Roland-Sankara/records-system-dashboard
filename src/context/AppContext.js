import React, {createContext, useState} from 'react';
import {useQuery} from 'react-query';
import {fetchData} from '../utils/utils'

const AppContext = createContext();

const ContextProvider = ({children})=>{
    const [section, setSection] = useState('Dashboard');
    const [entityId, setEntityId] = useState(null);
    const [entityData, setEntityData] = useState(null);

    const schoolsQuery = useQuery('schools', ()=>fetchData('trainingSchools'));
    const coursesQuery = useQuery('courseList', ()=>fetchData('courses'));
    const districtQuery = useQuery('districtList', ()=>fetchData('districts'));
    const contactsQuery = useQuery('contactsList', ()=>fetchData('contacts'));

    if(schoolsQuery.isLoading ||coursesQuery.isLoading || districtQuery.isLoading || contactsQuery.isLoading) return <h3>Loading...</h3>;

    if(schoolsQuery.error ||coursesQuery.error || districtQuery.error || contactsQuery.error) return <p>{`An error has occurred: ${coursesQuery.error || districtQuery.error || contactsQuery.error || schoolsQuery.error}`}</p>;
    

    function setCurrSection(section){
        setSection(section);
    }

    function setcurrEntity(id){
        setEntityId(id);
    }

    function setcurrEntityData(data){
        setEntityData(data);
    }

    console.log(coursesQuery, 'context');
    return(
        <AppContext.Provider value={{
            section,
            coursesQuery,
            districtQuery,
            contactsQuery, 
            schoolsQuery,
            entityId, 
            entityData,
            setCurrSection, 
            setcurrEntity,
            setcurrEntityData
            }}>
            {children}
        </AppContext.Provider>
    )
}

export {
    ContextProvider
}
export default AppContext

