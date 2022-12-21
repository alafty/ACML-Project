import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Header from '../components/header.tsx';
import services from '../app/RatingsServices.ts';



  
  export default function Rate() {
    const [courseRating, setCourseRating] = React.useState<number | null>(1);
    const [instructorRating, setInstructorRating] = React.useState<number | null>(1);
    const [courseID, setCourseID] = React.useState('');
    const [instructorID, setInstructorID] = React.useState('');
    const [rateField, setRateField] = React.useState('');
    const [error, setError] = React.useState("");

  
    return (
      <div className='container'>
        <Header/>
        <div className='body'>
         
         <h2 
         style= {{marginTop: "10vh"}}
         className='title'>Rate courses and instructors</h2>
         <div style={{marginLeft: "15vw"}}>
         <TextField 
         style={{marginBottom: "30px"}} 
         label="Course ID" 
         variant="standard" 
         className='search-bar' 
         required={true}
          onChange={(e) => {
            setCourseID(e.target.value);
          }}
          />
      <Box
        sx={{
          '& > legend': { mt: 1 },
        }}
      >
        <Typography component="legend">Rate this course</Typography>
        <Rating
        
          name="simple-controlled"
          value={courseRating}
          onChange={(event, newValue) => {
            setCourseRating(newValue);
          }}
        />
      </Box>
      <TextField style={{marginBottom: "30px"}} label="Instructor ID" variant="standard" className='search-bar' required={true}
          onChange={(e) => {
            setInstructorID(e.target.value);
          }}
          />
           <Box
        sx={{
          '& > legend': { mt: 1 },
        }}
      >
        <Typography component="legend">Rate this instructor</Typography>
        <Rating
        
          name="simple-controlled"
          value={instructorRating}
          onChange={(event, newValue) => {
            setInstructorRating(newValue);
          }}
        />
      </Box>
      </div>
      <Button 
        variant="contained" 
        id="filled-button"
        style={{"width": "400px", "marginTop": "50px", "marginLeft": "70vw"}}
        onClick={async () => {
          if(!courseID){
              setError("No course ID detected");
          } else {
            setError('');
            await services.rateCourse(courseID, courseRating);
          }
          if(!instructorID){
            setError("No instructor ID detected");
          }
          else{
            await services.rateInstructor(instructorID, instructorRating);
          }
          ;
         }}
        > Confirm </Button>
        <p>{error}</p>
          </div>
          </div>

    );
  }


  


