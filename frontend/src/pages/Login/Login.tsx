import React from 'react';
import '../../Styling/mainLayout.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Header from '../../components/header';
import services from '../../app/UsersServices';
import { useGlobalState } from '../../App';
import { stat } from 'fs';

function Login() {
  const navigation = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [state, dispatch] = useGlobalState();
  const [errorMessage, setErrorMesssage] = React.useState('yaaaay');
  services.createGuestCookie();

  const setUserData = async callback =>{
    state.loggedInUser = callback;
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
      <Header />
      <div className='body'>
        <h2 style={{ marginTop: "250px" }} className='title'> Jump back to where  you left off</h2>
        <div style={{ display: "flex", flexDirection: "row", marginLeft: "150px" }}>
          <TextField style={{ marginRight: "30px" }} label="Username" variant="standard" className='search-bar' required={true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField label="Password" variant="standard" className='search-bar' required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button
          variant="contained"
          id="filled-button"
          style={{ "width": "400px", "marginTop": "50px", "marginLeft": "70vw" }}
          onClick={
            async () => {
            await services.login(username, password, setUserData);
            }
          }
        > Login </Button>
        <h4>{errorMessage}</h4>
      </div>
    </div>

  )
}

export default Login;