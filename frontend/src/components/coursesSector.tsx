import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
import CourseCard from './courseCard'

function CoursesSector(props) {
  const renderCard =  ({name, desc}) => {
    return(
      <CourseCard name={name} desc={desc}/>
    );
  }
  return (
    <div>
              <h1 className='landing-header' style={{marginTop: '0px'}}>{props.title}</h1>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', overflow: 'scroll', scrollbarWidth: 'none', marginTop: '50px', marginLeft: '10px'}}>
              {props.dummycourses.map(renderCard)}
              </div>
            </div>
          
  )
}

export default CoursesSector;