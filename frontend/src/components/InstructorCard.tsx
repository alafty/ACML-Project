import React from 'react'
import '../Styling/mainLayout.css'

function InstructorCard(props) {
  
  return (
    <div className="course-details-instructor-info">
        <p className="course-details-instructor-header" style={{paddingTop: '4%'}}>About the instructor</p>
        <img src={require('../assets/engineering.jpg')} height="40%" style={{padding: '5%', borderRadius: '20' }} />
        <p className="course-details-instructor-name">{props.instructorDetails?.Username}</p>
        <p className="course-details-instructor-bio">{props.instructorDetails?.ShortBio}</p>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <p className="course-details-instructor-rating"> Rating: {props.instructorDetails?.RatingAvg}</p>
            <p className="course-details-instructor-rating-count"> ({props.instructorDetails?.RatingCount} Ratings)</p>
        </div>
        <p className="course-details-instructor-publishedcourses">Published Courses: {props.instructorDetails?.NumberOfCourses}</p>
</div>
          
  )
}

export default InstructorCard;
