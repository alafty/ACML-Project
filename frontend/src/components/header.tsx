import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import '../Styling/landing.css'

function Header() {
  return (
    <div className= "landing-header">
      <div className='logo'/>
      <div className='search-tab'>
        <TextField label="Search our courses library" variant="standard" className='search-bar'/>
        <Button variant="contained" id='button-search'> Search </Button>
      </div>
    </div>
          
  )
}

export default Header;