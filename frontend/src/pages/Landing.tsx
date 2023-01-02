import React from 'react';
import { useState, useEffect } from 'react';
import '../Styling/mainLayout.css';
import { Button, Divider } from '@mui/material';
import {Link} from 'react-router-dom';
import SearchAppBar from '../components/searchAppBar';
import CoursesSector from '../components/coursesSector';
import Services from '../app/CoursesServices';
import LinearProgress from '@mui/material/LinearProgress';
import { width } from '@mui/system';

function Landing() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await Services.getAllCourses();
      let filteredCourses = [];
      for (let index = 0; index < 10; index++) {
        const {Name, Description, _id, Price} = data[index];
        filteredCourses.push({Name, Description, _id, Price});
      }
      setCourses(filteredCourses);
    }
    fetchCourses();
  }, []);

  
  return (
    <div className= "container">
      <SearchAppBar page='0'/>
        <div className= "body">
            <div className='landing-card'>
              <div>
                <h1 className='landing-header'>Online courses for</h1>
                <h1 className='landing-header' style={{color: '#293237', paddingTop: '0%'}}>creative minds</h1>
                <p className='landing-subtitle'>Learn with top professionals in various creative and innovative industries</p>
                <p className='landing-subtitle'> </p>
                <div style={{flexDirection: 'row'}}>
                <Link  to= '/login' style={{textDecoration: 'none'}}> 
                  <Button variant="contained" id="big-button-secondary"> Login </Button>
                </Link>
                <Link to={'/register'} style= {{textDecoration: 'none'}}>
                  <Button variant="outlined" id="big-button-secondary-outlined">
                  Register
                  </Button>
                </Link>
                </div>
              </div>
              <img src={require('../assets/Tree-Man.png')} height={300} className='landing-tree-man' />
            </div>
            {
            courses ? 
            <>
            <CoursesSector coursesList={courses} title="Featured Courses"/> 
            <Divider />
            <CoursesSector coursesList={courses} title="Engineering"/>
            <Divider />
            <CoursesSector coursesList={courses} title="Politics"/>
            <Divider />
            <CoursesSector coursesList={courses} title="Business"/>
            </>
            :
            <> 
            <LinearProgress className='landing-progress' />
            <LinearProgress className='landing-progress' />
            <LinearProgress className='landing-progress' />
            <LinearProgress className='landing-progress' />
            </>
            }
            


        </div>
    </div>
    
  )
}

export default Landing;