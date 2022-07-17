import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import {useNavigate} from 'react-router-dom';
import './index.css';

const FlashCard = ({course})=>{
    const {setcurrEntity} = useContext(AppContext);
    const navigate = useNavigate();
    return(
        <div className="flash-card" onClick={()=>{
            setcurrEntity(course.id);
            navigate('/course/details');
            }}
        >
            <h4>{course.cadre || 'N/A'}</h4>
            <div className="details">
                <p>{course.name}</p>
                <p>{course.durationYears} Years</p>
            </div>
            <i className="fa-solid fa-arrow-right-long"></i>
        </div>
    )
}

export default FlashCard;