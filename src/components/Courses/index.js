import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import FlashCard from "../FlashCards/Course";
import Button from '../Button';

const Courses = ()=>{
    const {coursesQuery} = useContext(AppContext);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);

    const navigate = useNavigate();
    
    const coursesDataset = coursesQuery.data['data'];

    const currentPageData = ()=>{
        if(coursesDataset[endIndex-1]){
            return coursesDataset.slice(startIndex,endIndex);
        }else{
            return coursesDataset.slice(startIndex);
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
                <h3>Courses</h3>
                <Button text={"Add New"} icon={"fa-plus"} onClickFunc={()=>navigate('/schools/create')}/>
            </div>
            <div className='school-cards'>
                {currentPageData().map((course,index)=><FlashCard key={index} course={course}/>)}
            </div>

            <div className="pagination">
                {startIndex ? <Button text={"Prev"} icon={"fa-arrow-left-long"} onClickFunc={prevPage} />: ''}
                {endIndex <= coursesDataset.length-1 ? <Button text={"Next"} icon={"fa-arrow-right-long"} onClickFunc={nextPage} /> : ''}
            </div>

        </div>

    )
}

export default Courses;