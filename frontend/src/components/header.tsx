import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/Login'> Login </Link>
    </div>
  )
}

export default Header