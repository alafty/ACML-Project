import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import services from '../app/CoursesServices.ts';



  
  export default function Rate() {
    const [value, setValue] = React.useState<number | null>(1);
    const [courseID, setCourseID] = React.useState('');
    const [instructorID, setInstructorID] = React.useState('');
    const [rateField, setRateField] = React.useState('');

  
    return (
      <div className='rating'>
      <h2>Rate courses and instructors</h2>
      <Link to={'/rate'} style= {{textDecoration: 'none'}}>
      <TextField style={{marginBottom: "30px"}} label="Course ID" variant="standard" className='search-bar' required={true}
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
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
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
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Button 
        variant="contained" 
        id="filled-button"
        style={{"width": "400px", "marginTop": "50px", "marginLeft": "70vw"}}
        onClick={async () => {
          await services.rateCourses();
          setRateField(localStorage.getItem("rateCourse")!);
         }}
        > Confirm </Button>
          </Link>
          </div>
    );
  }


  


