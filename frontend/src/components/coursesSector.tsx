import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
import CourseCard from './courseCard'

function CoursesSector(props) {
  const renderCard =  ({Name, Description, _id, Price}) => {
    return(
      <CourseCard name={Name} desc={Description} id={_id} price={Price}/>
    );
  }
  return (
    <div style={{marginBottom: '50px'}}>
              <h1 className='landing-header' style={{marginTop: '0px'}}>{props.title}</h1>
              <div className='course-sector'>
              {props.coursesList.map(renderCard)}
              </div>
    </div>
          
  )
}

export default CoursesSector;