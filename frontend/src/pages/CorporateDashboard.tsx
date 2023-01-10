import React from 'react';
import { useState, useEffect } from 'react';
import '../Styling/mainLayout.css';
import '../Styling/dashboardLayout.css'
import { useGlobalState } from '../App';
import  Divider  from '@mui/material/Divider';
import  Button  from '@mui/material/Button';
import  Accordion  from '@mui/material/Accordion';
import  AccordionSummary  from '@mui/material/AccordionSummary';
import { CustomTextField } from '../components/TextField';
import AccordionDetails  from '@mui/material/AccordionDetails';
import Typography  from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CorporateServices from '../app/CorporateServices'
import Alert  from '@mui/material/Alert';

function CorporateDashboard() {
  const [state, dispatch] = useGlobalState();
  const [activeTab, setActiveTab] = useState('REQUESTS');
  const [isExpanded, setExpanded] = React.useState<String | false>('panel1');
  const [packageConfirmation, setPackageConfirmation] = useState('');
  const [traineeMail, setTraineeMail] = useState('');
  const [traineePassword, setTraineePassword] = useState('');
  const [traineeConfirm, setTraineeConfirm] = useState('');
  const [traineeName, setTraineeName] = useState('');
  
  

  const handleAccordionChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <div className= "container">
      {/* <LoggedInBar default='/Corporate/Dashboard'/> */}
        <div className= "dashboard-body">
            <div className='dashboard-side-bar'>
                <div>
                    <p className='side-bar-header'>Dashboard</p>
                    <Divider variant= 'middle' />

                    <Button 
                    id='side-bar-button'
                    onClick={() =>{
                        setActiveTab('REQUESTS');
                        setPackageConfirmation('');
                    }}> View Requests </Button>
                    <Divider variant= 'middle' />

                    <Button 
                    id='side-bar-button'
                    onClick={() =>{
                        setActiveTab('TRAINEES');
                        setPackageConfirmation('');
                    }}
                    > Manage Trainees </Button>
                    <Divider variant= 'middle' />

                    <Button 
                    id='side-bar-button'
                    onClick={() =>{
                        setActiveTab('PACKAGE');
                        setPackageConfirmation('');
                    }}
                    > Switch Package </Button>
                    <Divider variant= 'middle' />

                    <Button 
                    id='side-bar-button'
                    onClick={() =>{
                        setActiveTab('PROFILE');
                        setPackageConfirmation('');
                    }}
                    > Corporate Profile </Button>
                    <Divider variant= 'middle' />
                </div>
                <div>
                    <Divider variant='middle'/>
                    <Button id='side-bar-button'> Log out </Button>
                </div>
            </div>
            <div>
                <div>
                    {
                    activeTab == 'REQUESTS' ? 

                    <div className='dashboard-main-card'>
                        <p className='dashboard-header'> Latest Requests </p>
                    </div>

                    : activeTab == 'TRAINEES' ?
                    <div className='dashboard-main-card'>
                        <p className='dashboard-header'> Add Trainees </p>
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
                    </div>
                    : activeTab == 'PACKAGE' ?
                    <div className='dashboard-package-card'>
                        <h2 className='dashboard-header'> Change Packages </h2>
                        <Accordion 
                        expanded={isExpanded === 'panel1'} 
                        onChange={handleAccordionChange('panel1')}
                        className='accordion'
                        >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography id='package-header'>Feed The Seed</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <Typography id='package-details' >
                            * Register up to 5 Trainees
                        </Typography>
                        <Typography id='package-details'>
                            * Each trainee can enroll in up to 3 courses
                        </Typography>
                        <Typography id='package-details'>
                            * All Courses are accessible
                        </Typography>
                        <Typography id='package-price'> 
                            100 EUR / Month
                        </Typography>
                        <Button 
                        id='package-button'
                        onClick={async () => {
                            await CorporateServices.changePackage(state.loggedInUser._id,'63b82228fda53129cb7b0a9f');
                             setPackageConfirmation('Package Changed Successfully');
                        }}
                        > Change Package </Button>
                        </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={isExpanded === 'panel2'} className='accordion' onChange={handleAccordionChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
          <Typography id='package-header'>Grow The Seed</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography id='package-details'>
            * Register up to 10 Trainees
          </Typography>
          <Typography id='package-details'>
            * Each trainee can enroll in up to 5 courses
          </Typography>
          <Typography id='package-details'>
            * All Courses are accessible
          </Typography>
          <Typography id='package-price'> 
            150 EUR / Month
          </Typography>
          <Button 
          id='package-button'
          onClick={async () => {
            await CorporateServices.changePackage(state.loggedInUser._id,'63b82228fda51129cb7b0a9f');
            setPackageConfirmation('Package Changed Successfully');
            }}
        > Change Package </Button>
          </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={isExpanded === 'panel3'} className='accordion' onChange={handleAccordionChange('panel3')}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
          <Typography id='package-header'>Harvest The Tree</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography id='package-details'>
            * Register up to 50 Trainees
          </Typography>
          <Typography id='package-details'>
            * Each trainee can enroll in up to 10 courses
          </Typography>
          <Typography id='package-details'>
            * All Courses are accessible
          </Typography>
          <Typography id='package-price'> 
            300 EUR / Month
          </Typography>
          <Button 
          id='package-button'
          onClick={async () => {
            await CorporateServices.changePackage(state.loggedInUser._id,'63b8237ffda53129cb7b0aa3');
            setPackageConfirmation('Package Changed Successfully');
            }}
          > Change Package </Button>
          </AccordionDetails>
          </Accordion>
                    </div>
                    : activeTab == 'PROFILE' ?
                    <div className='dashboard-main-card'>
                        <p className='dashboard-header'> Profile </p>
                    </div>
                    : <></>
                    }
                    
                </div>
            { packageConfirmation ?
                <Alert 
            severity="error"
            className='alert'
            >{packageConfirmation}</Alert>  : <></>
            }
            </div>
         
        </div>
    </div>
    
  )
}

export default CorporateDashboard;