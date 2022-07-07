import Navigation from './components/NavigationBar/index';
import MainAppWrapper from './components/MainAppWrapper/index';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ContextProvider} from './context/AppContext';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';

const queryClient = new QueryClient()

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Navigation/>
            <MainAppWrapper>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/schools' element={<h1>Schools Section</h1>}/>
                <Route path='/courses' element={<h1>Courses Section</h1>}/>
                <Route path='/contacts' element={<h1>Contacts Section</h1>}/>
              </Routes>
            </MainAppWrapper>
          </Router>
        </QueryClientProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
