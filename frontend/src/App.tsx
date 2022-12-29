import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register.tsx'
import Login from './pages/Login/Login.tsx'
import ForgotPassword  from './pages/Login/ForgotPassword.tsx'
import ResetPassword  from './pages/Login/ResetPassword.tsx'

import Landing from './pages/Landing.tsx'
import IndividualTrainee from './pages/Register/IndividualTraineeRegister.tsx'
import InstructorRegister from './pages/Register/InstructorRegister.tsx'
import CorporateTrainee from './pages/Register/CorporateTraineeRegister.tsx'

import CourseDetails from './pages/Course/CourseDetails.tsx'
import Rate from './pages/Rate.tsx'

import CreateQuiz from './pages/Instructor/CreateQuiz.tsx'
import InstructorDetails from './pages/Instructor/InstructorDetails.tsx'
import Home from './pages/Home.tsx'
import Legal from './pages/Legal/Legal.tsx'
import LegalInstructor from './pages/Legal/LegalInstructor.tsx'
import SolveSolveEx from './pages/Course/SolveSolveEx.tsx'


const defaultGlobalState = {
  loggedInUser: {}
};

const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext)
];



function app() {
  
  return (
    <GlobalStateProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/courses' element={<CourseDetails/>} />
            <Route path='/' element={<Landing/>} />
            <Route path='/rate' element={<Rate/>} />
            <Route path='/indivTraineeRegister' element={<IndividualTrainee/>} />
            <Route path='/instructorRegister' element={<InstructorRegister/>} />
            <Route path='/corpTraineeRegister' element={<CorporateTrainee/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/instructorHome' element={<InstructorDetails/>} />
            <Route path='/legal' element= {<Legal/>} />
            <Route path='/legalinstructor' element= {<LegalInstructor/>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
			      <Route path="/password-reset/:id/:token" element={<ResetPassword />} />
            <Route path='/createquiz' element={<CreateQuiz/>} />
            <Route path='/getQuiz' element={<SolveSolveEx QuizID= {2}/>} />


          </Routes>
        </div>
      </Router>
    </GlobalStateProvider>
    
  )
}

export default app;