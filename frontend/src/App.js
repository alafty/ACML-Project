import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import Landing from './pages/Landing.tsx'
import IndividualTrainee from './pages/IndividualTraineeRegister.tsx'
import InstructorRegister from './pages/InstructorRegister.tsx'
import CorporateTrainee from './pages/CorporateTraineeRegister.tsx'

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