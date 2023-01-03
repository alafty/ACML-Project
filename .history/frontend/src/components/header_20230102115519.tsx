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
  const handleChange = event => {
   
    const courses = Services.searchCourseBySubject(event.target.value);
   //console.log(courses);
  };
  const { search } = window.location;
  const query = new URLSearchParams(search).get('searchTerm');
  //const value = (document.getElementById('searchTerm') as HTMLInputElement).value
  const onClick =()=>{
    const value = (document.getElementById('searchTerm') as HTMLInputElement).value

    console.log(value)
    Services.searchCourseBySubject(value)
    console.log(localStorage.getItem("SearchResults"))
    
  }
   

  return (
    <div className= "landing-header">
      <Link to={'/'}>
        <div className='logo'/>
      </Link>
      <div className='search-tab'>
        <TextField label="Search our courses library" variant="standard" className='search-bar' id='searchTerm' name="searchTerm" onChange={handleChange} />
   
        <Button variant="contained" id='button-search' onClick={onClick}> Search </Button>
     
      </div>
    </div>
          
  )
}

export default Header;