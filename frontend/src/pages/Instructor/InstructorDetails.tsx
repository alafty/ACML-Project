import React from 'react'
import Header from '../../components/header'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import {useGlobalState} from '../../App'
import services from '../../app/UsersServices';


function InstructorDetails() {
  const [state, dispatch] = useGlobalState();
  //console.log(state.loggedInUser.user.Email);
  const [isEditing, setIsEditing] = React.useState(false);
  const [avgRating, setAvgRating] = React.useState(state.loggedInUser.user.RatingAvg);
  const [email, setEmail] = React.useState(state.loggedInUser.user.Email);
  const [bio, setBio] = React.useState(state.loggedInUser.user.ShortBio);
  console.log(avgRating);
  const handleChanges = callback => {
    if(callback === "200"){
      let tempUser = state.loggedInUser.user;
      tempUser.Email = email;
      tempUser.ShortBio = bio;
      dispatch({loggedInUser: tempUser});
    }
  }

  return (
    <div>
      <Header/>
      <div className='body' style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{display: 'flex', flexDirection: 'column', width: '25%', padding: '20px'}} >
        <img src='../../assets/hat.png' style={{width: '90%', height: '90%', borderRadius: '10px'}}/>
        <h2> Instructor Name</h2>
         {isEditing ?<TextField label="Edit Bio" variant="standard" placeholder={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          /> : <p> {bio} </p>}
          
        <h2> Average Rating: {avgRating}</h2>
        {isEditing ? <TextField label="Edit E-Mail" variant="standard" placeholder={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} /> : <h2> E-Mail: {email} </h2>}
        <Button variant='outlined' id='outlined' 
        onClick={() =>{
          if(isEditing){
            services.editInstructorDetails(state.loggedInUser.user.Username, handleChanges, email, bio);
          }
          setIsEditing(!isEditing);
        }}> {isEditing ? 'Confirm Changes' : 'Edit Personal Details'}</Button>
        <Button variant='contained' id='filled-button' style={{marginLeft: '20px'}}> Add New Course</Button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '75%', padding: '50px'}}>
        <h1>Recent Courses</h1>
        <div style={{backgroundColor: '#f0f0f0', borderRadius: '20px', width: '100%', height:'100%'}}>

        </div>
      </div>
      </div>
    </div>
  )
}

export default InstructorDetails;
