import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Landing from './pages/Landing'
import IndividualTrainee from './pages/Register/IndividualTraineeRegister'
import InstructorRegister from './pages/Register/InstructorRegister'
import CorporateTrainee from './pages/Register/CorporateTraineeRegister'

function app() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Landing/>} />
            <Route path='/indivTraineeRegister' element={<IndividualTrainee/>} />
            <Route path='/instructorRegister' element={<InstructorRegister/>} />
            <Route path='/corpTraineeRegister' element={<CorporateTrainee/>} />
          </Routes>
        </div>
      </Router>
    </>
    
  )
}

export default app