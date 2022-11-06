import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'

function app() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </>
    
  )
}

export default app