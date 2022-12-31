import React from 'react';
import '../Styling/mainLayout.css';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import SearchAppBar from '../components/searchAppBar';
import CoursesSector from '../components/coursesSector';
import Divider from '@mui/material/Divider';

function LandingInstructor() {
  const dummycourses = [{
    name: "Introduction to Some Stuff",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63964a000947174879e5bc7d"
  }, 
  {
    name: "Intermediate Logics",
    desc: "description from can this be the most thing ever in this world and here and there from all the people that can see through this stuff",
    course: "63964a000947174879e5bc7d"
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
      <SearchAppBar page='1'/>
        <div className= "body" style={{backgroundColor: '#bae7e4'}}>
            <div className='landing-card' style={{backgroundColor: '#fcfcfc'}}>
              <div>
                <h1 className='landing-header'>Leave a mark</h1>
                <h1 className='landing-header' style={{color: '#52adcc', paddingTop: '0%'}}>in the world</h1>
                <p className='landing-subtitle'>Start teaching at the #1 platform for instructos in 2022 as by Forbes </p>
                <p className='landing-subtitle'> </p>
                <div style={{flexDirection: 'row'}}>
                <Link  to= '/login' style={{textDecoration: 'none'}}> 
                  <Button variant="contained" id="big-button-primary"> Login </Button>
                </Link>
                <Link to={'/instructorRegister'} style= {{textDecoration: 'none'}}>
                  <Button variant="outlined" id="big-button-primary-outlined">
                  Register
                  </Button>
                </Link>
                </div>
              </div>
            </div>


        </div>
    </div>
    
  )
}

export default LandingInstructor;