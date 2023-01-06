import React from 'react';
import { useState, useEffect } from 'react';
import '../Styling/mainLayout.css';
import { Divider } from '@mui/material';
import LoggedInBar from '../components/loggeedInAppBar';
import CoursesSector from '../components/coursesSector';
import Services from '../app/CoursesServices';
import LinearProgress from '@mui/material/LinearProgress';
import { useGlobalState } from '../App';

function Home() {
  const [courses, setCourses] = useState(null);
  const [state, dispatch] = useGlobalState();
  const [PurchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await Services.getAllCourses();
      let filteredCourses = [];
      for (let index = 0; index < 5; index++) {
        const {Name, Description, _id, Price} = data[index];
        filteredCourses.push({Name, Description, _id, Price});
      }
      setCourses(filteredCourses);
    }
    fetchCourses();

    const loadPurchasedCourses = () => {
      let tempPurchasedCourses = [];
      for (let index = 0; index < state.loggedInUser.PurchasedCourses.size ; index++) {
        const {Name, Description, _id, Price} = state.loggedInUser.PurchasedCourses[index];
        tempPurchasedCourses.push({Name, Description, _id, Price});
      }
      setPurchasedCourses(tempPurchasedCourses);
    }
    loadPurchasedCourses();
    
  }, []);

  
  return (
    <div className= "container">
      <LoggedInBar default='/home'/>
        <div className= "body">
          <p className='home-header'> Welcome Back, {state.loggedInUser.Username}</p>
          {
            PurchasedCourses.length > 0 ? 
            <CoursesSector coursesList={state.loggedInUser.PurchasedCourses} title= "Continue your work"/>
            :
            <></>
          }
          
            {
            courses ? 
            <>
            <CoursesSector coursesList={courses} title={PurchasedCourses.length > 0 ? "Featured Courses" : "Enroll in your first course"}/> 
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

export default Home;