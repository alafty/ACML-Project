import React from 'react'
import Header from '../../components/header.tsx'
import '../../Styling/landing.css'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function Register() {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div className='container'>
      <Header/>
      <div className='body'>
        <h2 className='title'> I want to register as a..</h2>
        <Select
          className='selector'
          value={type}
          label="Age"
          onChange={handleChange}
          >
          <MenuItem value={'/corpTraineeRegister'}>Corporate Trainee</MenuItem>
          <MenuItem value={'/indivTraineeRegister'}>Individual Trainee</MenuItem>
          <MenuItem value={'/instructorRegister'}>Instructor</MenuItem>
        </Select>
        <Link to={type} style={{textDecoration: 'none'}}>
          <Button 
          variant="contained" 
          id="filled-button"
          style={{"width": "400px", "marginTop": "50px", "marginLeft": "70vw"}}
          > Continue </Button>
        </Link>
      </div>
      
    </div>
    
  )
}

export default Register