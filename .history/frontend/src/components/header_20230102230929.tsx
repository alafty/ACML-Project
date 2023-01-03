import React, { useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
//import Services from '../app/CoursesServices'
import { useState } from 'react'
import qs from 'qs'
import axios from 'axios'
import { response } from 'express'


const Header = ()=> {
  const COURSES_URL = "/courses";

  const [searchResults,setsearchResults] = useState([]);
  const searchCourseBySubject = async (searchTerm: String) => {
    var data = qs.stringify({
      searchTerm: searchTerm,
    });
    var config = {
      method: "post",
      url: `${COURSES_URL}/search`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config)
    .then((res)=>{
      const results= res.data
      setsearchResults(results)
     
      console.log("hiiii")
      console.log(results)
      console.log(searchResults)
      
  }
    
    )
      .catch(function (error) {
        console.log(error);
      });
     
  };
  //const value = (document.getElementById('searchTerm') as HTMLInputElement).value
  //const results=searchCourseBySubject(value)
 // useEffect(() => { setsearchResults(results) }, [])
   
  
  const onClick =()=>{
    const value = (document.getElementById('searchTerm') as HTMLInputElement).value

    console.log(value)
    searchCourseBySubject(value)
    //console.log(searchResults)
    
  }
   

  return (
    <div className= "landing-header">
      <Link to={'/'}>
        <div className='logo'/>
      </Link>
      <div className='search-tab'>
        <TextField label="Search our courses library" variant="standard" className='search-bar' id='searchTerm' name="searchTerm" />
        <Link to={'/searchResults'}>
        <Button variant="contained" id='button-search' onClick={onClick}> Search </Button>
       
        </Link>
     
      </div>
    </div>
          
  )
}

export default Header;
