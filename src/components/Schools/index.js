import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import FlashCard from "../FlashCards/School";
import Button from '../Button';

import './index.css';

const Schools = ()=>{
    const {schoolsQuery} = useContext(AppContext);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);

    const navigate = useNavigate();
    
    const schoolsDataset = schoolsQuery.data['data'];

    const currentPageData = ()=>{
        if(schoolsDataset[endIndex-1]){
            return schoolsDataset.slice(startIndex,endIndex);
        }else{
            return schoolsDataset.slice(startIndex);
        }
    }

    const nextPage = ()=>{
        setStartIndex(startIndex+4);
        setEndIndex(endIndex+4)
    }

    const prevPage = ()=>{
        setStartIndex(startIndex-4);
        setEndIndex(endIndex-4)
    }

    return (
        <div className="schools-box">
            <div className="sch-header">
                <h3>Schools</h3>
                <Button text={"Add New"} icon={"fa-plus"} onClickFunc={()=>navigate('/schools/create')}/>
            </div>
            <div className='school-cards'>
                {currentPageData().map((school,index)=><FlashCard key={index} school={school}/>)}
            </div>

            <div className="pagination">
                {startIndex ? <Button text={"Prev"} icon={"fa-arrow-left-long"} onClickFunc={prevPage} />: ''}
                {endIndex <= schoolsDataset.length-1 ? <Button text={"Next"} icon={"fa-arrow-right-long"} onClickFunc={nextPage} /> : ''}
            </div>

        </div>

    )
}

export default Schools;