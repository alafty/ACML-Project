import React from 'react';
import '../../Styling/mainLayout.css';
import '../../Styling/loginLayout.css'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CustomTextField } from '../../components/TextField';
import Alert from '@mui/material/Alert';
import services from '../../app/AdminServices';
import { useGlobalState } from '../../App';
import SearchAppBar from '../../components/searchAppBar';

function RefundtoWallet() {
  
  const [userID, setUserID] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [state, dispatch] = useGlobalState();
  const [errorMessage, setErrorMesssage] = React.useState('');

  // if (props._id){
  // setUserID(props._id);
  // }
  const callBack = async (data: any, resError?: boolean) =>{
    if(resError){
      setErrorMesssage(data);
      console.log(errorMessage);
      return;
    }
    
  };

  return (
    <div className="dashboard-add-course-card">
      
        <div className='login-card'>
          <h2 className='login-header'> Refund User</h2>
          <CustomTextField
          id='text-field'
          placeholder="User ID"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
          <CustomTextField
          id='text-field'
          placeholder="Amount"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

        
        <Button
          variant="contained"
          id="big-button-primary"
          onClick={
            
            async () => {
              console.log("hig");
              if( !userID || !amount){
                setErrorMesssage("Please set the User ID and the amount ");
              } else{
             
      
                    await services.RefundUser(userID,Number(amount), callBack);

        
            }
           
            }
          }
        > Refund </Button>
        </div>
      
    </div>

  )
}

export default RefundtoWallet;