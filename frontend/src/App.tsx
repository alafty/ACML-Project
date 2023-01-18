import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword  from './pages/Login/ForgotPassword'
import ResetPassword  from './pages/Login/ResetPassword'
import PDFGenerator from "./pages/PDFGenerator";
import Landing from "./pages/Landing";
import InstructorLanding from "./pages/Instructor/InstructorLanding";
import CorporateLanding from "./pages/Corporate/CorporateLanding";

import IndividualRegister from "./pages/Register/IndividualTraineeRegister";
import CorporateRegister from "./pages/Register/CorporateRegister";
import InstructorRegister from "./pages/Register/InstructorRegister";

import Home from "./pages/Home";
import CorporateDashboard from "./pages/Corporate/CorporateDashboard";

import InstructorDetails from "./pages/Instructor/InstructorDashboard";
import Legal from "./pages/Legal/Legal";
import LegalInstructor from "./pages/Legal/LegalInstructor";
import CourseDetails from "./pages/Course/CourseDetails";

import Checkout from "./pages/payment/checkout";
import PurchasedCourseDetails from "./pages/Course/purchasedCourseDetails";

import Rate from "./pages/Rate";
import SubtitleDetail from "./pages/Course/SubtitleDetail";
import SolveSolveEx from './pages/Course/SolveSolveEx';
import LandingInstructor from "./pages/LandingInstructor";
import Admin from "./pages/admin/admin";

import AdminDashboard from "./pages/admin/adminDashboard";
import ApplyDiscount  from "./pages/admin/applyDiscount";

import CreateAdmin from "./pages/admin/createAdmin";
import CreateInstructor from "./pages/admin/createInstructor";
import CreateCTrainee from "./pages/admin/createCTrainee";
import CreateITrainee from "./pages/admin/createITrainee";
import ViewProblems from "./pages/admin/viewProblems";
import ViewInstructors from "./pages/admin/viewInstructors";
import UpdateInstructor from "./pages/admin/updateInstructor";
import ViewAdmins from "./pages/admin/viewAdmins";
import ViewCorps from "./pages/admin/viewCorps";
import CreateCorporate from "./pages/admin/createCorporate";
import ViewCTrainees from "./pages/admin/viewCTrainees";
import ViewITrainees from "./pages/admin/viewITrainees";

import AdminDashboard from "./pages/admin/AdminDashboard";

import TraineeProfile from "./pages/TraineeProfile";

const defaultGlobalState = {
  loggedInUser: {},

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
            path='/instructor' 
            element={<InstructorLanding/>} />

            <Route 
            path='/corporate' 
            element={<CorporateLanding/>} />         

            <Route
              path="/register/indivTrainee"
              element={<IndividualRegister />}
            />

            <Route 
            path="/register/corporate" 
            element={<CorporateRegister />} />

            <Route 
            path="/register/instructor" 
            element={<InstructorRegister />} />

            <Route 
            path="/login" 
            element={<Login />} />

            <Route 
            path='/rate' 
            element={<Rate/>} />

            <Route 
            path="/home" 
            element={<Home />} />

            <Route 
            path="/corporate/dashboard" 
            element={<CorporateDashboard />} />

            <Route
            path="/instructor/dashboard" 
            element={<InstructorDetails />} />
            

            <Route path="/pdf" element={<PDFGenerator/>} />
            <Route path="/createquiz" element={<CreateQuiz />} />
            <Route path="/checkout=:id" element={<Checkout />} />
            <Route path="/course=:id" element={<CourseDetails />} />
            <Route path='/legal' element= {<Legal/>} />
            <Route path='/legalinstructor' element= {<LegalInstructor/>} />

            <Route 
            path="/adminDashboard" 
            element={<AdminDashboard />} />
            
            <Route 
            path="/admin" 
            element={<Admin />} />

            <Route 
            path="/pdf" 
            element={<PDFGenerator/>} />

            <Route 
            path="/course=:id" 
            element={<CourseDetails />} />

            <Route 
            path="/course=:id" 
            element={<PurchasedCourseDetails />} />

            <Route 
            path='/legal' 
            element= {<Legal/>} />

            <Route 
            path='/legalinstructor' 
            element= {<LegalInstructor/>} />

            

            <Route path='/course=:id/sub=:subId' element={<SubtitleDetail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
			      <Route path="/password-reset/:id/:token" element={<ResetPassword />} />
            <Route path='/getQuiz' element={<SolveSolveEx QuizID= {2}/>} />

            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/applyDiscount" element={<ApplyDiscount />} />

            <Route path="/createAdmin" element={<CreateAdmin />} />
            <Route path="/viewAdmins" element={<ViewAdmins />} />
            <Route path="/createInstructor" element={<CreateInstructor />} />
            <Route path="/createCorpTrainee" element={<CreateCTrainee />} />
            <Route path="/viewCorpTrainee" element={<ViewCTrainees />} />
            <Route path="/createindivTrainee" element={<CreateITrainee />} />
            <Route path="/viewindivTrainee" element={<ViewITrainees />} />
            <Route path="/viewProblems" element={<ViewProblems />} />
            <Route path="/viewInstructors" element={<ViewInstructors />} />
            <Route path="/updateInstructor" element={<UpdateInstructor />} />
            <Route path="/viewCorporates" element={<ViewCorps />} />
            <Route path="/createCorporate" element={<CreateCorporate />} />

            <Route path="/traineeProfile" element={<TraineeProfile />} />


          </Routes>
        </div>
      </Router>
    </GlobalStateProvider>
    
  )
}

export default app;
