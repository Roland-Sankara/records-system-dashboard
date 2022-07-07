import './index.css';

const StatsCard = ({name, num, icon})=>{
    return(
        <div className='card'>
            <div className='stat-box'>  
                <p>{num}</p>
                <p>{name}</p>
            </div>

            <div className='card-box'>
                <i className={`fa-solid ${icon}`}></i>
            </div>
        </div>
    )
}

export default StatsCard;