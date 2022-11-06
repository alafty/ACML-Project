import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import Header from './components/Header.tsx'

function app() {
  return (
    <>
      <Router>
        <div>
          <Header />
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