import React from 'react';
import { useState, useEffect } from 'react';
import '../Styling/mainLayout.css';
import { Button, Divider } from '@mui/material';
import {Link} from 'react-router-dom';
import SearchAppBar from '../components/searchAppBar';
import CoursesSector from '../components/coursesSector';
import Services from '../app/CoursesServices';
import LinearProgress from '@mui/material/LinearProgress';

function Landing() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await Services.getAllCourses();
      let filteredCourses = [];
      for (let index = 0; index < data.length; index++) {
        const {Name, Description, _id, Price} = data[index];
        filteredCourses.push({Name, Description, _id, Price});
      }
      setCourses(filteredCourses);
    }
    fetchCourses();
    console.log(courses);
  }, []);
  

  

  
  
  
  const dummycourses = [{
    name: "Introduction to Some Stuff",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63af6fa0e9791cccf40fb018"
  }, 
  {
    name: "Intermediate Logics",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63b038dba2777c7c4f6811a8"
  },
  {
    name: "Amends for Dummies",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63964a000947174879e5bc7d"
  },
  {
    name: "Politics in Folitics",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63964a000947174879e5bc7d"
  },
  {
    name: "Brazil and World Economy",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63964a000947174879e5bc7d"
  } ];

  
  return (
    <div className= "container">
      <SearchAppBar page='0'/>
        <div className= "body">
            <div className='landing-card'>
              <div>
                <h1 className='landing-header'>Online courses for</h1>
                <h1 className='landing-header' style={{color: '#52adcc', paddingTop: '0%'}}>creative minds</h1>
                <p className='landing-subtitle'>Learn with top professionals in various creative and innovative industries</p>
                <p className='landing-subtitle'> </p>
                <div style={{flexDirection: 'row'}}>
                <Link  to= '/login' style={{textDecoration: 'none'}}> 
                  <Button variant="contained" id="big-button-primary"> Login </Button>
                </Link>
                <Link to={'/register'} style= {{textDecoration: 'none'}}>
                  <Button variant="outlined" id="big-button-primary-outlined">
                  Register
                  </Button>
                </Link>
                </div>
              </div>
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