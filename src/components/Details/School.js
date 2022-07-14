import {useContext, useState} from 'react';
import {useQuery} from 'react-query';
import {fetchDataById, deleteData} from '../../utils/utils';
import {useNavigate} from 'react-router-dom';
import Button from '../Button/index';
import AppContext from '../../context/AppContext';
import './index.css';
const SchoolDetails = ()=>{
    const {entityId, setcurrEntityData} = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const schoolData = useQuery('school', ()=>fetchDataById('trainingSchools',entityId),{cacheTime:0});
    if(schoolData.isLoading) return <h3>Loading...</h3>;
    if(schoolData.error) return <p>{`An error has occurred: ${schoolData.error}`}</p>;
    
    const schoolDetails = schoolData.data['data'];

    return (
        <div className="entity-details">
            <h2>School Details</h2>
            <div className="content-sect">
                <div>
                    <p><span>Name: </span>{schoolDetails?.name || 'N/A'}</p>
                    <p><span>Reg.Status: </span>{schoolDetails?.registrationStatus || 'N/A'}</p>
                    <p><span>Health Facility: </span>{schoolDetails?.healthFacility || 'N/A'}</p>
                    <p><span>Pass Rate: </span>{schoolDetails?.passRate || 'N/A'}</p>
                    <p><span>Address: </span>{schoolDetails?.address || 'N/A'}</p>
                    <p><span>Principal: </span>{schoolDetails?.principal || 'N/A'}</p>
                </div>

                <div>
                    <p><span>Email: </span>{schoolDetails?.email || 'N/A'}</p>
                    <p><span>District: </span>{schoolDetails?.district?.name || 'N/A'}</p>
                    <p><span>Courses: </span> <select className="drop-down"><option>Check Courses</option>{schoolDetails?.courses.map(course=><option key={course.id} >{course.name}</option>)}</select></p>
                    <p><span>Contacts: </span> <select className="drop-down"><option>Check Contacts</option>{schoolDetails?.contacts.map(contact=><option key={contact.id} >{contact.phoneNumber}</option>)}</select></p>
                </div>
            </div>
            <div className="buttons">
                <Button text={'Edit'} icon={'fa-pencil'} onClickFunc={()=>{
                    setcurrEntityData(schoolDetails);
                    navigate('/schools/edit');
                    }}/>
                <Button text={isLoading?'Loading...':'Delete'} icon={'fa-trash'} color={'#B20600'} onClickFunc={async()=>{
                    setIsLoading(true);
                    let response = await deleteData('trainingSchools',entityId, setIsLoading);
                    if(response['status_code'] === 200){
                        setIsLoading(false);
                        alert(`School: (${schoolDetails.name}) has been successfully deleted.`);
                        navigate('/schools');
                    }
                }}/>
            </div>
        </div>
    )
}

export default SchoolDetails;