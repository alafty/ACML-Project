import React from 'react';
import '../Styling/mainLayout.css';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import SearchAppBar from '../components/searchAppBar';
import CoursesSector from '../components/coursesSector';
import Divider from '@mui/material/Divider';

function Landing() {
  const dummycourses = [{
    name: "Introduction to Some Stuff",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff"
  }, 
  {
    name: "Intermediate Logics",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff"
  },
  {
    name: "Amends for Dummies",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff"
  },
  {
    name: "Politics in Folitics",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff"
  },
  {
    name: "Brazil and World Economy",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff"
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
            <CoursesSector dummycourses={dummycourses} title="Featured Courses"/>
            <CoursesSector dummycourses={dummycourses} title="Engineering"/>
            <CoursesSector dummycourses={dummycourses} title="Politics"/>
            <CoursesSector dummycourses={dummycourses} title="Business"/>


        </div>
    </div>
    
  )
}

export default Landing;