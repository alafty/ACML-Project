import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
import Services from '../app/CoursesServices'
import { useState } from 'react'

const Header = ()=> {
  const [searchResults,setsearchResults] = useState([]);
  const getAllCourses = async () => {
    
  };
  return (
    <div className= "landing-header">
      <Link to={'/'}>
        <div className='logo'/>
      </Link>
      <div className='search-tab'>
        <TextField label="Search our courses library" variant="standard" className='search-bar'/>
        <Button variant="contained" id='button-search'> Search </Button>
      </div>
    </div>
          
  )
}

export default Header;