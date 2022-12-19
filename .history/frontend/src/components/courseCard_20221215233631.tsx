import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'

function CourseCard() {
  return (
    
    <div className='course-card'>

        <img src='../assets/hat.png'/>
        <h2>Intro to bla bla</h2>
        <Button style={{margin: '0px'}} variant='contained' id='filled-button'> View Course </Button>            
    </div>
          
  )
}

export default CourseCard;