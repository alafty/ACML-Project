import React from 'react';
import '../../Styling/mainLayout.css';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import {TextField} from '@mui/material';
import Header from '../../components/header.tsx';

function InstructorHome() {
  
  return (
    <div className= "container">
      <Header/>
        <div className= "body">
            <h2 className= "title"> Welcome Back Mr, </h2>
            <h5 className= "landing-subtitle">where you'll learn to live and not live to learn</h5>
            <div style={{"display": "flex", "flexDirection": "row", justifyContent: "space-between", "alignItems": "flex-start"}}>
              <div style={{"display": "flex", "flexDirection": "row"}}>
                <Link  to= '/login' style={{textDecoration: 'none'}}> 
                  <Button variant="contained" id="filled-button"> Login </Button>
                </Link>
                <Link to={'/register'} style= {{textDecoration: 'none'}}>
                  <Button variant="outlined" id="outlined">
                  Register
                  </Button>
                </Link>
                
              </div>
              <div className='hat'/>
            </div>
        </div>
    </div>
    
  )
}

export default InstructorHome;