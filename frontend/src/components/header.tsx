import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div>
        <Link to='/Login'> Login </Link>
    </div>
  )
}

export default header