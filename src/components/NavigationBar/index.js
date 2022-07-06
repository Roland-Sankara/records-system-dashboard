import './index.css';

const Navigation = ()=>{
    return (
        <div className='navigation-menu'>
            <div className='logo-box'>
            <img src='RSD-logos_transparent.png' alt='application logo'/>
            </div>
            <div className='menu-box'>
            <nav>
                <ul className='menu-list'>
                <li>
                    <i class="fa-solid fa-compass-drafting"></i>
                    <span>Dashboard</span>
                </li>
                <li>
                    <i class="fa-solid fa-folder-closed"></i>
                    <span>Schools</span>
                </li>
                <li>
                    <i class="fa-solid fa-folder-closed"></i>
                    <span>Courses</span>
                </li>
                <li>
                    <i class="fa-solid fa-folder-closed"></i> 
                    <span>Contacts</span>
                </li>
                </ul>
            </nav>
            </div>
      </div>
    )
}

export default Navigation;