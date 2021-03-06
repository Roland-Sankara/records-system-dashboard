import Navigation from './components/NavigationBar/index';
import MainAppWrapper from './components/MainAppWrapper/index';
import Dashboard from './components/Dashboard';
import Schools from './components/Schools';
import Courses from './components/Courses/index';
import Contacts from './components/Contacts';
import SchoolForm from './components/Forms/SchoolForm';
import CourseForm from './components/Forms/CourseForm';
import EditSchool from './components/Forms/EditSchool';
import EditCourse from './components/Forms/EditCourse';
import CourseDetails from './components/Details/Course';
import SchoolDetails from './components/Details/School';
import ContactForm from './components/Forms/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ContextProvider} from './context/AppContext';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ScrollToTop} from 'react-router-scroll-to-top';
import './App.css';

const queryClient = new QueryClient()

function App() {
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Router>
            <ScrollToTop/>
            <Navigation/>
            <MainAppWrapper>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/schools' element={<Schools/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/schools/create' element={<SchoolForm/>}/>
                <Route path='/schools/edit' element={<EditSchool/>}/>
                <Route path='/courses/create' element={<CourseForm/>}/>
                <Route path='/courses/edit' element={<EditCourse/>}/>
                <Route path='/contacts/create' element={<ContactForm/>}/>
                <Route path='/school/details' element={<SchoolDetails/>}/>
                <Route path='/course/details' element={<CourseDetails/>}/>
              </Routes>
            </MainAppWrapper>
          </Router>
        </ContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
