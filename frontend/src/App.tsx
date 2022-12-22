import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword  from './pages/Login/ForgotPassword'
import ResetPassword  from './pages/Login/ResetPassword'

import Landing from "./pages/Landing";
import IndividualTrainee from "./pages/Register/IndividualTraineeRegister";
import InstructorRegister from "./pages/Register/InstructorRegister";
import CorporateTrainee from "./pages/Register/CorporateTraineeRegister";
import CreateQuiz from "./pages/Instructor/CreateQuiz";
import InstructorDetails from "./pages/Instructor/InstructorDetails";
import Home from "./pages/Home";
import Legal from "./pages/Legal/Legal";
import LegalInstructor from "./pages/Legal/LegalInstructor";
import CourseDetails from "./pages/Course/CourseDetails";

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
            <Route path='/' element={<Landing/>} />
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />
            <Route path='/rate' element={<Rate/>} />
            <Route
              path="/indivTraineeRegister"
              element={<IndividualTrainee />}
            />
            <Route
              path="/instructorRegister"
              element={<InstructorRegister />}
            />
            <Route path="/corpTraineeRegister" element={<CorporateTrainee />} />
            <Route path="/home" element={<Home />} />
            <Route path="/instructorHome" element={<InstructorDetails />} />

            <Route path="/createquiz" element={<CreateQuiz />} />
            <Route path="/course=:id" element={<CourseDetails />} />
            <Route path='/instructorHome' element={<InstructorDetails/>} />
            <Route path='/legal' element= {<Legal/>} />
            <Route path='/legalinstructor' element= {<LegalInstructor/>} />
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
