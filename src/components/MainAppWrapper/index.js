import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import './index.css';

const MainAppWrapper = ({children})=>{
    const {section, toggleMenuView, openMenu} = useContext(AppContext);
    return(
        <div className='main-app-section'>
            <header className='app-banner'>
                <h2>{section}</h2>
                <div className='burger-menu'>
                    <i className={`fa-solid ${openMenu ? "fa-xmark":"fa-bars"}`} onClick={()=>{
                        openMenu ? toggleMenuView(false) : toggleMenuView(true)
                    }}></i>
                </div>
            </header>
            {children}
      </div>
    )
}

export default MainAppWrapper;