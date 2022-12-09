import React from 'react'
import Header from '../components/header.tsx'
import '../Styling/landing.css'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import {TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import services from '../app/UsersServices.ts';

function CorporateTrainee() {
  const [country, setCountry] = React.useState('Egypt');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [corporate, setCorporate] = React.useState('GUC');


  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const handleCorpChange = (event: SelectChangeEvent) => {
    setCorporate(event.target.value as string);
  };

  return (
    <div className='container'>
      <Header/>
      <div className='body'>
        <h2 style={{marginTop: "100px"}} className='title'> Let us know more about you..</h2>
        <div className='form'>
          <TextField style={{marginBottom: "30px"}} label="Username" variant="standard" className='search-bar' required={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} label="E-mail" variant="standard" className='search-bar' required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} label="Password" variant="standard" className='search-bar' required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
          <TextField style={{marginBottom: "30px"}} label="Confirm Password" variant="standard" className='search-bar' required={true}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          />
          <Select
            className='selector'
            style={{marginLeft: "0px"}}
            value={country}
            label="Country"
            onChange={handleCountryChange}
            >
            <MenuItem value={'Egypt'}>Egypt</MenuItem>
            <MenuItem value={'Germany'}>Germany</MenuItem>
          </Select>
          <Select
            className='selector'
            style={{marginLeft: "0px", marginTop: "30px"}}
            value={corporate}
            label="Corporate"
            onChange={handleCorpChange}
            >
            <MenuItem value={'GUC'}>GUC</MenuItem>
            <MenuItem value={'GIU'}>GIU</MenuItem>
          </Select>
          <p>{error}</p>
        </div>
      
        
        <Button 
        variant="contained" 
        id="filled-button"
        style={{"width": "400px", "marginTop": "50px", "marginLeft": "70vw"}}
        onClick={async () => {
          if(password !== confirmPassword){
            setError("Password and Confirm Password fields do not match!");
            setPassword('');
            setConfirmPassword('');
          } else{
            services.registerCorporate(username, password, email, country, corporate);
          }
          
          
        }}
        > Sign Up </Button>

        <div style={{display: "flex", flexDirection: "row", marginLeft: "70vw"}}>
          <p>by clicking sign up you agree to our </p>
          <Link to={'/landing'}>
            <p> terms and conditions</p>
          </Link>
        </div>
      </div>
      
    </div>
    
  )
}

export default CorporateTrainee;