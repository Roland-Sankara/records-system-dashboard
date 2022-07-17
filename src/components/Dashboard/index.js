import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import StatsCard from '../Card';
import Chart from '../Chart';
import FlashCard from '../FlashCards/Course';
import './index.css';

const Dashboard = ()=>{
    const {coursesQuery,contactsQuery,schoolsQuery} = useContext(AppContext);

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