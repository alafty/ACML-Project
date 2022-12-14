import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Landing from './pages/Landing'
import IndividualTrainee from './pages/Register/IndividualTraineeRegister'
import InstructorRegister from './pages/Register/InstructorRegister'
import CorporateTrainee from './pages/Register/CorporateTraineeRegister'
import CreateQuiz from './pages/Instructor/CreateQuiz'
import InstructorDetails from './pages/Instructor/InstructorDetails'
import Home from './pages/Home'
import Legal from './pages/Legal/Legal'
import LegalInstructor from './pages/Legal/LegalInstructor'

const defaultGlobalState = {
  loggedInUser: {user: String, instructor: String}
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
            <Route path='/indivTraineeRegister' element={<IndividualTrainee/>} />
            <Route path='/instructorRegister' element={<InstructorRegister/>} />
            <Route path='/corpTraineeRegister' element={<CorporateTrainee/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/instructorHome' element={<InstructorDetails/>} />
            <Route path='/legal' element= {<Legal/>} />
            <Route path='/legalinstructor' element= {<LegalInstructor/>} />

            <Route path='/createquiz' element={<CreateQuiz/>} />

          </Routes>
        </div>
      </Router>
    </GlobalStateProvider>
    
  )
}

export default app;