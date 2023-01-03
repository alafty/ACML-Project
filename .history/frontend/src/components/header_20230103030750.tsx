import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
import { useState } from 'react'
import qs from 'qs'
import axios from 'axios'


const Header = ()=> {
  const COURSES_URL = "/courses";

  

  const [courses, setCourses] = useState(null);

 /* useEffect(() => {
    const fetchCourses = async () => {
      const data = await onClick();
    
      setCourses(data);
      console.log('i am in useEffect')
      console.log(courses)
    }
    fetchCourses();
  }, []);*/


  const getusers = async (searchTerm: String)=> {
    var fetchedUsers=[]
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
        await axios(config).then((res)=>{console.log(res.data)
           fetchedUsers= res.data
          
        
      }
        
        )
        console.log('hiii')
        console.log(fetchedUsers)
        return fetchedUsers
      }
      ;
/*
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
      setsearchResults(results)
      console.log(searchResults)
     
     
  }
    
    )
      .catch(function (error) {
        console.log(error);
      });
      
  };*/
  //const value = (document.getElementById('searchTerm') as HTMLInputElement).value
  //const results=searchCourseBySubject(value)
 // useEffect(() => { setsearchResults(results) }, [])
   
  
  const onClick = async ()=>{
    const value = (document.getElementById('searchTerm') as HTMLInputElement).value

    console.log(value)
   // const array= searchCourseBySubject(value)
    
    //const array= getusers(value)
    //console.log(array)
    //return array
    var fetchedUsers=[]
    var data = qs.stringify({
      searchTerm: value,
    });
    var config = {
      method: "post",
      url: `${COURSES_URL}/search`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
        await axios(config).then((res)=>{console.log(res.data)
           fetchedUsers= res.data
          
        
      }
        
        )
        console.log('hiii')
        console.log(fetchedUsers)
        return fetchedUsers
    
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
