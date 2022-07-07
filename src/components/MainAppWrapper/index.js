import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import './index.css';

const MainAppWrapper = ({children})=>{
    const {section} = useContext(AppContext);
    return(
        <div className='main-app-section'>
            <header className='app-banner'>
                <h2>{section}</h2>
            </header>
            {children}
      </div>
    )
}

export default MainAppWrapper;