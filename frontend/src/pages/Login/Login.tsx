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

function Login() {
  
  const navigation = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [state, dispatch] = useGlobalState();
  const [errorMessage, setErrorMesssage] = React.useState('');
  services.createGuestCookie();

  const setUserData = async (data: any, resError?: boolean) =>{
    if(resError){
      setErrorMesssage(data);
      console.log(errorMessage);
      return;
    }
    state.loggedInUser = data;
    console.log(state.loggedInUser);
    try {
        if (state.loggedInUser.type === "instructor") {
          navigation('/instructor/dashboard');
        } else if (state.loggedInUser.type === "corporate") {
          navigation('/corporate/dashboard');
        } 
        else {
          navigation('/home');
        }
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container">
      <SearchAppBar page={0} />
      <div className='login-body'>
        <div className='login-card'>
          <h2 className='login-header'> Jump back and grow your tree</h2>
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
        
        <Button
          variant="contained"
          id="big-button-primary"
          onClick={
            async () => {
              if(!email || !password){
                setErrorMesssage("please enter all required fields");
              } else{
                await services.login(email, password, setUserData);
              }
           
            }
          }
        > Login </Button>
        <Link to={'/forgot-password'}>
            <p className='forgot-password'>Forgot password?</p>
          </Link>
          {
            errorMessage ?
            <Alert 
            severity="error"
            className='alert'
            >{errorMessage}</Alert> 
            :
            <></>
          }
        
        </div>
        <div className='login-card'>
          <h2 className='login-header'> New here? Put your first seed</h2>
          <Button
          variant="contained"
          id="big-button-primary"
          onClick={ () =>{
            navigation('/register/indivTrainee');
          }}
        > Register </Button>

        <h2 className='login-header'> Water others' trees as their instructor </h2>
          <Button
          variant="contained"
          id="big-button-primary"
          onClick={ () =>{
            navigation('/register/instructor');
          }}
        > Register as an Instructor </Button>

        <h2 className='login-header'> Grew a garden already? </h2>
          <Button
          variant="contained"
          id="big-button-primary"
          onClick={ () =>{
            navigation('/register/corporate');
          }}
        > Induct your corporate </Button>
        </div>
      </div>
    </div>

  )
}

export default Login;