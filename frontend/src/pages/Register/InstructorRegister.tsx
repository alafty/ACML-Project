import React from 'react'
import '../../Styling/mainLayout.css'
import { Button } from '@mui/material';
import {TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchAppBar from '../../components/searchAppBar';
import services from '../../app/UsersServices';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function InstructorRegister() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [shortBio, setShortBio] = React.useState('');
  const [error, setError] = React.useState('');


  return (
    <div className='container'>
      <SearchAppBar page={1}/>
      <div className='body'>
        <div className='register-card'>
        <h2 style={{marginTop: "130px"}} className='landing-header'> Create your account</h2>
        <div className='form'>
          <TextField 
          label="Username" 
          variant="standard" 
          className='search-bar' 
          style={{marginBottom: "30px"}}
          required={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} 
          label="E-mail" 
          variant="standard" 
          className='search-bar' 
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} 
          label="Password" 
          variant="standard" 
          className='search-bar' 
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} 
          label="Confirm Password" 
          variant="standard" 
          className='search-bar' 
          required={true}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} 
          label="Short Bio" 
          variant="standard" 
          className='search-bar' 
          required={true}
          onChange={(e) => {
            setShortBio(e.target.value);
          }}
          />
          <Stack sx={{ width: '100%' }} spacing={2}>
            {error? <Alert severity="error">{error}</Alert> : <></>}
         </Stack>
          </div>
        </div>
      
        
        <Button 
        variant="contained" 
        id="big-button-primary"
        style={{"width": "400px", "marginTop": "50px", "marginLeft": "70vw"}}
        onClick={async () => {
          if(!username || !password || !email || !confirmPassword || !shortBio){
            setError('please fill all the fields')
          }
          if(password !== confirmPassword){
            setError("Password and Confirm Password fields do not match!");
            setPassword('');
            setConfirmPassword('');
          } else{
            services.registerInstructor(username, password, email, shortBio);
          }
          
          
        }}
        > Sign Up </Button>

        <div style={{display: "flex", flexDirection: "row", marginLeft: "70vw"}}>
          <p>by clicking sign up you agree to our </p>
          <Link to={'/legalinstructor'}>
            <p> terms and conditions</p>
          </Link>
          
        </div>
        
      </div>
      
    </div>
    
  )
}

export default InstructorRegister;