import React from 'react';
import '../../Styling/mainLayout.css';
import '../../Styling/loginLayout.css'
import SearchAppBar from '../../components/searchAppBar';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

function InstructorLanding() {
  
  return (
    <div className= "container">
      <SearchAppBar page='1'/>
        <div className= "login-body">
            <div className='landing-card-instructor'>
              <div>
                <h1 className='landing-header-instructor'>Help others</h1>
                <h1 className='landing-header' style={{color: '#293237', paddingTop: '0%'}}>grow their seeds</h1>
                <p className='landing-subtitle-instructor'> Publish your courses on our platform and earn as twice as any other platform</p>
                <p className='landing-subtitle-instructor'> </p>
                <div style={{flexDirection: 'row'}}>
                <Link  to= '/login' style={{textDecoration: 'none'}}> 
                  <Button variant="contained" id="big-button-primary"> Login </Button>
                </Link>
                <Link to={'/register/instructor'} style= {{textDecoration: 'none'}}>
                  <Button variant="outlined" id="big-button-primary-outlined">
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

export default  InstructorLanding;