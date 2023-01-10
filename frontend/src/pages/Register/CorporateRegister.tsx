import React, { useEffect } from 'react'
import SearchAppBar from '../../components/searchAppBar';
import '../../Styling/mainLayout.css'
import '../../Styling/loginLayout.css'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { CustomTextField } from '../../components/TextField';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../../app/UsersServices';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import { useGlobalState } from '../../App';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';

function CorporateRegister() {
  
  const navigation = useNavigate();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [industry, setIndustry] = React.useState('');
  const [error, setError] = React.useState('');
  const [state, dispatch] = useGlobalState();
  const [isPackageVisible, setPacakageVisible] = React.useState(false);
  const [isExpanded, setExpanded] = React.useState<String | false>('panel1');

  // useEffect(() => {
  //   let data;
  //   const fetchCorps = async () => {
  //     data = await corpServices.fetchCorporates(); 
  //   }
  //   fetchCorps();
  //   setCorporate(data);
  //   console.log(corporate);

  // }, []);
  
  const LoginRedirect = async (data) => {
    state.loggedInUser = data;
    console.log(state.loggedInUser);
    navigation('/home');
  }

  const handleCorpChange = (event: SelectChangeEvent) => {
    setIndustry(event.target.value as string);
  };

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className='container'>
      <SearchAppBar page={0}/>
      <div className='login-body'>
        {
          isPackageVisible ?
          <div className='login-card'>
            <h2 className='login-header'> Choose your corporate's package </h2>
            <Accordion expanded={isExpanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
          <Typography id='package-header'>Feed The Seed</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography id='package-details'>
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
            if(password !== confirmPassword){
              setPacakageVisible(false);
              setError("Password and Confirm Password fields do not match!");
              setPassword('');
              setConfirmPassword('');
            } else if(!username || !password || !confirmPassword || !username || !industry){
              setPacakageVisible(false);
              setError("Please fill all fields");
            } else {
              userServices.createCorporate(username, password, email, industry,'63b82228fda53129cb7b0a9f',LoginRedirect);
              setError('');
            }
          }}
          > Select and Register </Button>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={isExpanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
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
            if(password !== confirmPassword){
              setPacakageVisible(false);
              setError("Password and Confirm Password fields do not match!");
              setPassword('');
              setConfirmPassword('');
            } else if(!username || !password || !confirmPassword || !username || !industry){
              setPacakageVisible(false);
              setError("Please fill all fields");
            } else {
              userServices.createCorporate(username, password, email, industry,'63b82228fda51129cb7b0a9f',LoginRedirect);
              setError('');
            }
          }}
          > Select and Register </Button>
          </AccordionDetails>
          </Accordion>
          
          <Accordion expanded={isExpanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
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
            if(password !== confirmPassword){
              setPacakageVisible(false);
              setError("Password and Confirm Password fields do not match!");
              setPassword('');
              setConfirmPassword('');
            } else if(!username || !password || !confirmPassword || !username || !industry){
              setPacakageVisible(false);
              setError("Please fill all fields");
            } else {
              userServices.createCorporate(username, password, email, industry,'63b8237ffda53129cb7b0aa3',LoginRedirect);
              setError('');
            }
          }}
          > Select and Register </Button>
          </AccordionDetails>
          </Accordion>
          <Button 
          id='big-button-primary'
          onClick={() => {
            setPacakageVisible(false);
          }}
          > Back </Button>
          </div>
          :
          <div className='register-card'>
          <h2 className='login-header'> Induct your Corporate </h2>
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
          placeholder="Corporate Name"
          InputProps={{
            className: 'text-field'
          }}
          onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FormControl fullWidth>           
          <InputLabel className='selector-label'>Select your corporate's field</InputLabel>
            <Select
            className='selector'
            onChange={handleCorpChange}
            >
            <MenuItem value={'Education'}>Education</MenuItem>
            <MenuItem value={'Media'}>Media</MenuItem>
            <MenuItem value={'Human Resources'}>Human Resources</MenuItem>
            <MenuItem value={'Adminstration'}>Adminstration</MenuItem>
            <MenuItem value={'Legal Firm'}>Legal Firm</MenuItem>
            <MenuItem value={'Governmental'}>Governmental</MenuItem>
          </Select>
          </FormControl>

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
        onClick={() => {
          setPacakageVisible(true);
        }}
        > Next </Button>

        <div className='terms-and-conditions'>
          <p>by clicking sign up you agree to our &nbsp; </p>
          <Link to={'/legal'} style={{color: '#4b96a9'}}>
            <p> terms and conditions </p>
          </Link>
        </div>
          </div>
        }
        
      </div>
      
    </div>
    
  )
}

export default CorporateRegister;
          
  