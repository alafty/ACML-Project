import React from 'react'
import '../Styling/mainLayout.css'
import { Button } from '@mui/material';

function PriceCard(props) {

  return (
    <div className="course-details-price-body">
        <p className="course-details-price" > Price: {props.courseDetails?.Price} EUR </p>
      <Button variant= "contained" id="big-button-primary"> Purchase Course</Button>        
    </div>
          
  )
}

export default PriceCard;

