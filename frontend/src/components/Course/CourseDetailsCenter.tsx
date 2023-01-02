import React from 'react'
import '../../Styling/mainLayout.css'
import CourseVideo from './CourseVideo'
import Divider from '@mui/material/Divider'

function CourseDetailsCenter(props) {
  const path = `/course=${props.id}`;
  return (
    <div style={{width: '70%'}}>
        <CourseVideo embedId={props.courseDetails?.VideoId} />
        <div className='course-details-card'>
          <p className="course-details-title">{props.courseDetails?.Name}</p>
          <p className="course-details-description">{props.courseDetails?.Description}</p>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <p className="course-details-rating"> Rating: {props.courseDetails?.RatingAvg}/5</p>
          <p className="course-details-rating-count">({props.courseDetails?.RatingCount} Students)</p>
       </div>
        <p className="course-details-hours"> Total Hours: {props.courseDetails?.TotalHours}</p>
      </div>
      <Divider variant= "middle" />
    </div>
          
  )
}

export default CourseDetailsCenter;