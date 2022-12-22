import React from 'react';
import '../Styling/mainLayout.css';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import {TextField} from '@mui/material';
import Header from '../components/header';
import CourseCard from '../components/courseCard';
import Services from '../app/CoursesServices';
function Home() {
  
  
  return (
    <div className= "container">
      <Header/>
        <div className= "body">
            <h3 style= {{marginTop: '100px'}} className='title'> Featured Courses </h3>
            <div className='courses-panel-bg'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    </div>
    
  )
}

export default Home;