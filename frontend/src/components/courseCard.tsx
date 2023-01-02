import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
import services from '../app/CoursesServices';


function CourseCard(props) {
  const path = `/course=${props.course}`;
  return (
    <div className='course-card'>
        <img src={require('../assets/engineering.jpg')} width={400} height={200} style={{borderRadius: '10px'}}/>
        <h2 style={{paddingInline: '10px', fontFamily: 'sans-serif', color: '#293237'}}>{props.name}</h2>
        <h3 style={{paddingInline: '10px', fontWeight: 'lighter'}}>{props.desc}</h3>
        <Link to={path} style={{ textDecoration: 'none'}}>
        <Button 
        variant='contained' 
        id='big-button-primary'
        style={{width: '390px'}}
        > View Course </Button>   
        </Link>         
    </div>
          
  )
}

export default CourseCard;