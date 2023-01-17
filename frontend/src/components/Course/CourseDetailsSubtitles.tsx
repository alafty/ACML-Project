import React from 'react'
import '../../Styling/mainLayout.css'
import CourseVideo from './CourseVideo'
import Divider from '@mui/material/Divider';
import Subtitle from './Subtitle';

function CourseDetailsSubtitles(props) {
  return (
    <div className='course-details-subtitles-card' >
        <p className="course-details-title" style={{marginTop: '0px', marginBottom: '20px'}}> Course Details </p>
        {props.courseDetails?.Subtitles.map(renderSubtitle)}
    </div>
          
  )
}

const renderSubtitle =  ({_id ,Description, Order}) => {
    return(
      <Subtitle _id={_id} Description={Description} count={Order}/>
    );
  }
export default CourseDetailsSubtitles;

