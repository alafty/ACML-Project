import React from 'react';
import '../../Styling/mainLayout.css';
import '../../Styling/loginLayout.css'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CustomTextField } from '../../components/TextField';
import Alert from '@mui/material/Alert';
import services from '../../app/UsersServices';
import { useGlobalState } from '../../App';
import SearchAppBar from '../../components/searchAppBar';

function ApplyDiscount() {
  
  const [courseID, setCourseID] = React.useState('');
  const [percentage , setPercentage ] = React.useState('');
  const [ duration , setDuration ] = React.useState('');
  const [state, dispatch] = useGlobalState();
  const [errorMessage, setErrorMesssage] = React.useState('');
  services.createGuestCookie();

  const callBack = async (data: any, resError?: boolean) =>{
    if(resError){
      setErrorMesssage(data);
      console.log(errorMessage);
      return;
    }
    
  }

  return (

      <div className='login-body'>
        <div className='dashboard-add-course-card'>
          <h2 className='login-header'> Add Discount to Course </h2>
          <CustomTextField
          id='text-field'
          placeholder="Course ID"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setCourseID(e.target.value);
            }}
          />
          <CustomTextField
          id='text-field'
          placeholder="Discount Percentage"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setPercentage(e.target.value);
            }}
          />
          <CustomTextField
          id='text-field'
          placeholder="Duration "
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setDuration(e.target.value);
            }}
          />

        
        <Button
          variant="contained"
          id="big-button-primary"
          onClick={
            
            async () => {
              if( !percentage || !duration){
                setErrorMesssage("Please set the percentage and duration for the Discount");
              } else{
             
                // if (!courseID){
                //     await services.AddDiscount(percentage, duration,courseID, callBack);
                // }else{
                    await services.AddDiscountAll(percentage,duration, callBack);

                // }
            }
           
            }
          }
        > Apply Discount </Button>
        </div>
      </div>

  )
}

export default ApplyDiscount;