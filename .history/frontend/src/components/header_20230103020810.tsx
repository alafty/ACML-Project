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


const Header = ()=> {
  const COURSES_URL = "/courses";


    

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await searchCourseBySubject(value);
      setCourses(data)}
    fetchCourses();
  }, []);




  const [searchResults,setsearchResults] = useState([]);




  const searchCourseBySubject = async (searchTerm: String) => {
    var results=[]
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
      results= res.data
     
      console.log("hiiii")
      console.log(results)
  
  }
    
    )
      .catch(function (error) {
        console.log(error);
      });
     return results
  };
  //const value = (document.getElementById('searchTerm') as HTMLInputElement).value
  //const results=searchCourseBySubject(value)
 // useEffect(() => { setsearchResults(results) }, [])
   
  var value =''
  const onClick =()=>{
     value = (document.getElementById('searchTerm') as HTMLInputElement).value

    console.log(value)
    
  }
   
 
  return (
    <div className= "landing-header">
      <Link to={'/'}>
        <div className='logo'/>
      </Link>
      <div className='search-tab'>
        <TextField label="Search our courses library" variant="standard" className='search-bar' id='searchTerm' name="searchTerm" />
        <Link to={'/searchResults'}>
        <Button variant="contained" id='button-search'  onChange={onClick}> Search </Button>
       
        </Link>
     
      </div>
    </div>
          
  )
}

export default Header;
