import { Button } from '@mui/material';
import React from 'react'
import services from '../../app/CoursesServices.ts';
import { Link } from 'react-router-dom';


export default function CourseDetails() {
  const [testField, setTestField] = React.useState('');
  return (
    <div className='container'>
      <h2>{testField}</h2>
       <Link to={'/courses'} style= {{textDecoration: 'none'}}>
       <Button 
        variant="contained" 
        id="filled-button"
        style={{"width": "400px", "marginTop": "50px", "marginLeft": "70vw"}}
        onClick={async () => {
         await services.getAllCourses();
         setTestField(localStorage.getItem("AllCourses")!);
        }}
        > View Courses </Button>
               </Link>

    </div>
   
  )
}
