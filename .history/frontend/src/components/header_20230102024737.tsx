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
  const onClick =()=>{
    console.log(query)
    console.log(Services.searchCourseBySubject(query));
  }
  /*const { search } = window.location;
  const query = new URLSearchParams(search).get('searchTerm');
  const handleChange = () => {
    if (!query) {
        console.log(Services.searchCourseBySubject(query))
        return Services.searchCourseBySubject(query);
    }
    else {
      console.log("no results found")
    }
    
   
   
};*/
  return (
    <div className= "landing-header">
      <Link to={'/'}>
        <div className='logo'/>
      </Link>
      <div className='search-tab'>
        <TextField label="Search our courses library" variant="standard" className='search-bar'  name="searchTerm" onChange={handleChange} />
        <Link to={'/searchResults'}>
        <Button variant="contained" id='button-search' onClick={onClick}> Search </Button>
        </Link>
      </div>
    </div>
          
  )
}

export default Header;