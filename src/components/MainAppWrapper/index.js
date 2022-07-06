import './index.css';

const MainAppWrapper = ({children})=>{
    return(
        <div className='main-app-section'>
            <header className='app-banner'>
                <h2>{'Dashboard'}</h2>
            </header>
            {children}
      </div>
    )
}

export default MainAppWrapper;