import './index.css';
const Button = ({text, icon, color, onClickFunc})=>{
    return(
        <button className="button" style={{background:`${color || '#E87121'}`}} onClick={()=>onClickFunc()}>
            <i className={`fa-solid ${icon || ''}`}></i>
            <span>{text}</span>
        </button>
    )
}

export default Button;