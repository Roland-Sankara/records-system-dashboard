import './index.css';

const FlashCard = ({course})=>{
    return(
        <div className="flash-card">
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