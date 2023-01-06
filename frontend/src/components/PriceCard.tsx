import React from 'react'
import '../Styling/mainLayout.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PriceCard(props) {
  const navigation = useNavigate();
  return (
    <div className="course-details-price-body">
        <p className="course-details-price" > Price: {props.courseDetails?.Price} EUR </p>
      <Button 
      variant= "contained" 
      id="big-button-primary"
      onClick={() => {
        if(props.isPurchased) {
          navigation('/home');
        } else {
          navigation('/');
        }
      }} 
      > {props.isPurchased ? "Go To Course" : "Purchase Course"}</Button>        
    </div>
          
  )
}

export default PriceCard;

