import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword  from './pages/Login/ForgotPassword'
import ResetPassword  from './pages/Login/ResetPassword'

import Landing from "./pages/Landing";
import IndividualTrainee from "./pages/Register/IndividualTraineeRegister";
import InstructorRegister from "./pages/Register/InstructorRegister";
import CorporateTrainee from "./pages/Register/CorporateRegister";
import CreateQuiz from "./pages/Instructor/CreateQuiz";
import InstructorDetails from "./pages/Instructor/InstructorDetails";
import Home from "./pages/Home";
import Legal from "./pages/Legal/Legal";
import LegalInstructor from "./pages/Legal/LegalInstructor";
import CourseDetails from "./pages/Course/CourseDetails";
import Rate from "./pages/Rate";
import SubtitleDetail from "./pages/Course/SubtitleDetail";
import SolveSolveEx from './pages/Course/SolveSolveEx';
import LandingInstructor from "./pages/LandingInstructor";
import InstructorHome from "./pages/Instructor/InstructorHome";
const defaultGlobalState = {
  loggedInUser: { user: String, instructor: String },
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
  React.useContext(dispatchStateContext),
];




function app() {
  
  return (
    <GlobalStateProvider>
      <Router>
        <div>
          <Routes>
            <Route 
            path='/' 
            element={<Landing/>} />

            <Route
              path="/register/indivTrainee"
              element={<IndividualTrainee />}
            />

            <Route 
            path="/register/corpTrainee" 
            element={<CorporateTrainee />} />

            <Route
              path="/register/instructor"
              element={<InstructorRegister />}
            />

            <Route
              path="/register/corporate"
              element={<InstructorRegister />}
            />

            <Route 
            path="/login" 
            element={<Login />} />

            <Route 
            path='/rate' 
            element={<Rate/>} />

            <Route
            path='/instructor/home'
            element={<InstructorHome/>}/>

            <Route
            path='/corporate/home'
            element={<InstructorHome/>}/>

            <Route 
            path="/home" 
            element={<Home />} />

            <Route
            path="/instructor/profile" 
            element={<InstructorDetails />} />

            <Route 
            path="/instructor/home"
            element={<LandingInstructor/>} />

            <Route path="/createquiz" element={<CreateQuiz />} />
            <Route path="/course=:id" element={<CourseDetails />} />
            <Route path='/legal' element= {<Legal/>} />
            <Route path='/legalinstructor' element= {<LegalInstructor/>} />
            <Route path='/course=:id/sub=:subId' element={<SubtitleDetail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
			      <Route path="/password-reset/:id/:token" element={<ResetPassword />} />
            <Route path='/getQuiz' element={<SolveSolveEx QuizID= {2}/>} />


          </Routes>
        </div>
      </Router>
    </GlobalStateProvider>
    
  )
}

export default app;
