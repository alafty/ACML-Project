import React from 'react';
import '../../Styling/mainLayout.css';
import '../../Styling/loginLayout.css'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CssTextField } from '../../components/TextField';
import Alert from '@mui/material/Alert';
import services from '../../app/UsersServices';
import { useGlobalState } from '../../App';
import SearchAppBar from '../../components/searchAppBar';

function Login() {
  const navigation = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [state, dispatch] = useGlobalState();
  const [errorMessage, setErrorMesssage] = React.useState('');
  services.createGuestCookie();

  const setUserData = async (data: any) =>{
    state.loggedInUser = data;
    //console.log(state.loggedInUser);
    try {
      if (state.loggedInUser.user) {
        if (state.loggedInUser.type === "instructor") {
          navigation('/instructorHome');
        } else {
          navigation('/home');
        }
      } else {
        setErrorMesssage("incorrect username or password!")
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
          <CssTextField
          id='text-field'
          placeholder="E-Mail"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <CssTextField
          id='text-field'
          placeholder="Password"
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
            await services.login(username, password, setUserData);
            }
          }
        > Login </Button>
        <Link to={'/forgot-password'}>
            <p className='forgot-password'>Forgot password?</p>
          </Link>
          {
            errorMessage ?
            <Alert severity="error">{errorMessage}</Alert> 
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
            navigation('/register');
          }}
        > Register </Button>

        <h2 className='login-header'> Water others' trees as their instructor </h2>
          <Button
          variant="contained"
          id="big-button-primary"
          onClick={ () =>{
            navigation('/instructor/home');
          }}
        > Register as an Instructor </Button>

        <h2 className='login-header'> Grew a garden already? </h2>
          <Button
          variant="contained"
          id="big-button-primary"
          onClick={ () =>{
            navigation('/register');
          }}
        > Induct your corporate </Button>
        </div>
      </div>
    </div>

  )
}

export default Login;