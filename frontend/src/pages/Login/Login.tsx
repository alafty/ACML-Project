import { createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// @ts-ignore
import services from '../app/service.ts'
import {useEffect, useState} from 'react'

function Login() {
  var [message, setMessage] = useState('firstMessage')

  useEffect(() => {
  }, [message])
  
  return (
    <>
      <h1> Login </h1>
      <button 
      onClick={async () => {
        try {
          setMessage(JSON.stringify(localStorage.getItem('AllCourses')));
        } catch (error) {
          const message = (error.response && error.response.data.message && error.response.data) ||
          error.message || error.toString()
          setMessage(message);
        }
      }}> Click Me </button>
      <h2>{message}</h2>
    </>
    
  )
}

const getCourses = createAsyncThunk('/courses', async () => {
  try {
    await services.getAllCourses();
  } catch (error) {
    const message = (error.response && error.response.data.message && error.response.data) ||
    error.message || error.toString()
    console.log(message)
  }
})

export default Login