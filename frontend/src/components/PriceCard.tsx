import React, { useState } from 'react'
import '../Styling/mainLayout.css'
import '../Styling/dashboardLayout.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Services from '../app/RequestsServices';
import Alert from '@mui/material/Alert';

function PriceCard(props) {
  const navigation = useNavigate();
  const [request, setRequest] = useState(false);
  const path = `/checkout= ${props.courseID}`;

  
  return (
    <div>
    <div className="course-details-price-body">
        <p className="course-details-price" > Price: {props.courseDetails?.Price} EUR </p>
      <Button 
      variant= "contained" 
      id="big-button-primary"
      onClick={async ()  => {
        if(props.isPurchased) {
          navigation(`/course/purchased=${props.courseID}`);
        } else {
          if(props.type === "corporateTrainee" && !request){
              await Services.createCourseRequest(props.userDetails._id, props.courseDetails._id, props.userDetails.Corporate);
              setRequest(true);
          }
          else {
            navigation(path);
          }
        }
      }} 
      > {props.isPurchased ? "Go To Course" : 
            props.type === "corporateTrainee" ? request ? "Requested" : "Request Course" :
               "Purchase Course" }</Button>  
        
         
             
    </div>
    {request ?
    <Alert 
        severity="success"
        className='alert'
        >Request Sent Successfully</Alert>
        : <></>}
    </div>
          
  )
}

export default PriceCard;

