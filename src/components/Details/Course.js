import {useContext, useState} from 'react';
import {useQuery} from 'react-query';
import {fetchDataById, deleteData} from '../../utils/utils';
import {useNavigate} from 'react-router-dom';
import Button from '../Button/index';
import AppContext from '../../context/AppContext';
import './index.css';
const CourseDetails = ()=>{
    const {entityId, setcurrEntityData} = useContext(AppContext);
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const courseData = useQuery('school', ()=>fetchDataById('courses',entityId),{cacheTime:0});
    if(courseData.isLoading) return <h3>Loading...</h3>;
    if(courseData.error) return <p>{`An error has occurred: ${courseData.error}`}</p>;
    
    const courseDetails = courseData.data['data'];

    return (
        <div className="entity-details">
            <h2>Course Details</h2>
            <div className="content-sect">
                <div>
                    <p><span>Name: </span>{courseDetails?.name || 'N/A'}</p>
                    <p><span>Cadre: </span>{courseDetails?.cadre || 'N/A'}</p>
                    <p><span>Professional Qualification: </span>{courseDetails?.professionalQualification || 'N/A'}</p>
                    <p><span>Duration: </span>{`${courseDetails?.durationYears} Years` || 'N/A'}</p>
                </div>
            </div>
            <div className="buttons">
                <Button text={'Edit'} icon={'fa-pencil'} onClickFunc={()=>{
                    setcurrEntityData(courseDetails);
                    navigate('/courses/edit');
                    }}/>
                <Button text={isLoading?'Loading...':'Delete'} icon={'fa-trash'} color={'#B20600'} onClickFunc={async()=>{
                    setIsLoading(true);
                    let response = await deleteData('courses',entityId);
                    if(response['status_code'] === 200){
                        setIsLoading(false);
                        alert(`Course: (${courseDetails.name}) has been successfully deleted.`);
                        navigate('/courses');
                    } 
                }}/>
            </div>
        </div>
    )
}

export default CourseDetails;