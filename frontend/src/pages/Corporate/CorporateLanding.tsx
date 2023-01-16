import React from 'react';
import '../../Styling/mainLayout.css';
import '../../Styling/loginLayout.css'
import SearchAppBar from '../../components/searchAppBar';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

function CorporateLanding() {
  
  return (
    <div className= "container">
      <SearchAppBar page='2'/>
        <div className= "login-body">
            <div className='landing-card-corporate'>
              <div>
                <h1 className='landing-header'>Induct your corporate</h1>
                <h1 className='landing-header' style={{color: '#293237', paddingTop: '0%'}}>and harvest your trees</h1>
                <p className='landing-subtitle'> Join us now to give your corporate exclusive packages for trainees</p>
                <p className='landing-subtitle'> </p>
                <div style={{flexDirection: 'row'}}>
                <Link  to= '/login' style={{textDecoration: 'none'}}> 
                  <Button variant="contained" id="big-button-secondary"> Login </Button>
                </Link>
                <Link to={'/register/corporate'} style= {{textDecoration: 'none'}}>
                  <Button variant="outlined" id="big-button-secondary-outlined">
                  Register
                  </Button>
                </Link>
                </div>
              </div>
              <img src={require('../../assets/Tree-Man.png')} height={300} className='landing-tree-man' />
            </div>
        </div>
    </div>
    
  )
}

export default  CorporateLanding;