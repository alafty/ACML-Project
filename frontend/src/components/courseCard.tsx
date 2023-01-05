import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Hidden, TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/mainLayout.css'
import services from '../app/CoursesServices';


function CourseCard(props) {
  const path = `/course=${props.id}`;
  return (
    <div className='course-card'>
        <img src={require('../assets/engineering.jpg')} height={200} style={{borderRadius: '20px'}}/>
        <h2 className='course-card-title'>{props.name}</h2>
        <h3 className='course-card-description'>{props.desc}</h3>
        <h3 className='course-card-price'> {props.price} EUR </h3>
        <Link to={path} style={{ textDecoration: 'none'}}>
        <Button 
        variant='contained' 
        id='big-button-primary'
        style={{width: '390px', justifySelf: 'flex-end'}}
        > View Course </Button>   
        </Link>         
    </div>
          
  )
}

export default CourseCard;