import './index.css';

const FlashCard = ({school})=>{
    console.log(school)
    return(
        <div className="flash-card">
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