import React from 'react'
import '../../Styling/mainLayout.css'
import CourseVideo from './CourseVideo'
import Divider from '@mui/material/Divider'

function Subtitle(props) {
    
  return (
    <div className='course-details-subtitle'>
        <p className="course-details-subtitle-header"> Subsection {props.count}</p>
        <p className="course-details-subtitle-description">{props.Description}</p>
    </div>
          
  )
}

export default Subtitle;


