import React from 'react'
import SearchAppBar from '../../components/searchAppBar';
import '../../Styling/mainLayout.css'
import '../../Styling/loginLayout.css'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { CustomTextField } from '../../components/TextField';
import { Link, useNavigate } from 'react-router-dom';
import services from '../../app/UsersServices';
import Alert from '@mui/material/Alert';
import { useGlobalState } from '../../App';

function IndividualTrainee() {
  
  const navigation = useNavigate();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [state, dispatch] = useGlobalState();

  const LoginRedirect = async (data: any, resError: boolean) => {
    if(resError){
      setError(data);
      console.log(error);
      return;
    }
    state.loggedInUser = data;
    console.log(state.loggedInUser);
    navigation('/home');
  }

  return (
    <div className='container'>
      <SearchAppBar page={0}/>
      <div className='login-body'>
        <div className='register-card'>
          <h2 className='login-header'> Free your seed to grow</h2>
          <CustomTextField 
          id='text-field'
          placeholder="E-Mail"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <CustomTextField 
          id='text-field'
          placeholder="Password"
          type={'password'}
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <CustomTextField 
          id='text-field'
          placeholder="Confirm Password"
          type={'password'}
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <CustomTextField 
          id='text-field'
          placeholder="Full Name"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {
            error ?
            <Alert 
            severity="error"
            className='alert'
            >{error}</Alert> 
            :
            <></>
          }
      
        <Button 
        variant="contained" 
        id="big-button-primary"
        onClick={async () => {
          if(password !== confirmPassword){
            setError("Password and Confirm Password fields do not match!");
            setPassword('');
            setConfirmPassword('');
          } else if(!username || !password || !confirmPassword || !username){
            setError("Please fill all fields");
          } else {
            services.register(username, email, password, LoginRedirect);
            setError('');
          }
        }}
        > Sign Up </Button>

        <div className='terms-and-conditions'>
          <p>by clicking sign up you agree to our &nbsp; </p>
          <Link to={'/legal'} style={{color: '#4b96a9'}}>
            <p> terms and conditions </p>
          </Link>
        </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default IndividualTrainee;