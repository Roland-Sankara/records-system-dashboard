import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import {Link} from 'react-router-dom';
import './index.css';

const Navigation = ()=>{
    const {setCurrSection, section} = useContext(AppContext);
    return (
        <div className='navigation-menu'>
            <div className='logo-box'>
            <img src='RSD-logos_transparent.png' alt='application logo'/>
            </div>
            <div className='menu-box'>
                <nav>
                    <ul className='menu-list'>
                        <li>
                            <Link to='/' onClick={()=>setCurrSection('Dashboard')} className={section === 'Dashboard' && 'highlight'}>
                                <i className="fa-solid fa-compass-drafting"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/schools' onClick={()=>setCurrSection('Schools')} className={section === 'Schools' && 'highlight'}>
                                <i className="fa-solid fa-folder-closed"></i>
                                <span>Schools</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/courses' onClick={()=>setCurrSection('Courses')} className={section === 'Courses' && 'highlight'}>
                                <i className="fa-solid fa-folder-closed"></i>
                                <span>Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contacts' onClick={()=>setCurrSection('Contacts')} className={section === 'Contacts' && 'highlight'}>
                                <i className="fa-solid fa-folder-closed"></i> 
                                <span>Contacts</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
      </div>
    )
}

export default Navigation;