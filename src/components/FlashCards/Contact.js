import './index.css';

const FlashCard = ({contact})=>{
    return(
        <div className="flash-card">
            <h4><i className="fa-solid fa-phone"></i></h4>
            <div className="details">
                <p>{contact.phoneNumber}</p>
            </div>
            <i className="fa-solid fa-arrow-right-long"></i>
        </div>
    )
}

export default FlashCard;