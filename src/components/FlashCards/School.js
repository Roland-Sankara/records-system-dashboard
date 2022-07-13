import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import {useNavigate} from 'react-router-dom';
import './index.css';

const FlashCard = ({school})=>{
    const {setcurrEntity} = useContext(AppContext);
    const navigate = useNavigate();
    return(
        <div className="flash-card" onClick={()=>{
            setcurrEntity(school.id);
            navigate('/school/details');
            }}
        >
            <h4>{school['district']?.name || 'N/A'}</h4>
            <div className="details">
                <p>{school.name}</p>
                <p>{school.registrationStatus}</p>
            </div>
            <i className="fa-solid fa-arrow-right-long"></i>
        </div>
    )
}

export default FlashCard;