import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register.tsx'
import Login from './pages/Login/Login.tsx'
import Landing from './pages/Landing.tsx'
import IndividualTrainee from './pages/Register/IndividualTraineeRegister.tsx'
import InstructorRegister from './pages/Register/InstructorRegister.tsx'
import CorporateTrainee from './pages/Register/CorporateTraineeRegister.tsx'
import CourseDetails from './pages/Course/CourseDetails.tsx'
import Rate from './pages/Rate.tsx'


function app() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/courses' element={<CourseDetails/>} />
            <Route path='/' element={<Landing/>} />
            <Route path='/rate' element={<Rate/>} />
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