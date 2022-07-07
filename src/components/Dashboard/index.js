import {useQuery} from 'react-query';
import {fetchData} from '../../utils/utils';
import StatsCard from '../Card';
import Chart from '../Chart';
import FlashCard from '../FlashCard';
import './index.css';

const Dashboard = ()=>{

    const schoolsQuery = useQuery('schools', ()=>fetchData('trainingSchools'));
    const coursesQuery = useQuery('courses', ()=>fetchData('courses'));
    const contactsQuery = useQuery('contacts', ()=>fetchData('contacts'));

    if(schoolsQuery.isLoading || coursesQuery.isLoading || contactsQuery.isLoading) return <h3>Loading...</h3>;

    if(schoolsQuery.error || coursesQuery.error || contactsQuery.error) return <p>{`An error has occurred: ${schoolsQuery.error || coursesQuery.error || contactsQuery.error}`}</p>;

    const coursesDataset = {};
    let courses = coursesQuery.data['data'];
    let schools = schoolsQuery.data['data'];
    for(let course of courses){
        for(let school of schools){
            for(let i=0; i<school['courses'].length; i++){
                if(school['courses'][i]['id'] === course['id']){
                    coursesDataset[course['id']]? coursesDataset[course['id']]['num'] += 1 : coursesDataset[course['id']] = {num:1,  details:course}
                }
            }
        }
    }
    const popularCourses = Object.values(coursesDataset).sort((a,b)=>b.num - a.num).slice(0,3)

    return(
        <div className='dashboard-box'>
            <div className='stats-section'>
                <StatsCard name="Schools" num={schoolsQuery.data['data'].length} icon={'fa-building-columns'}/>
                <StatsCard name="Courses" num={coursesQuery.data['data'].length} icon={'fa-graduation-cap'}/>
                <StatsCard name="Contacts" num={contactsQuery.data['data'].length} icon={'fa-user-tie'}/>
            </div>
            <div className='bar-graph'>
                <Chart dataSet={schoolsQuery}/>
            </div>
            <div className='popular-courses'>
                <h3>Popular Courses</h3>
                <div>
                    {popularCourses.map((course,index)=><FlashCard key={index} course={course['details']}/>)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;