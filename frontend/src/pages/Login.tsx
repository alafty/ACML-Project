//import { createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// @ts-ignore
import services from '../app/CoursesServices.ts'
import {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField'

function Login() {
  var [message, setMessage] = useState('firstMessage');
  var [search, setSearch] = useState('search here');

  useEffect(() => {
  }, [ message, search])
  
  return (
    <>
      <h1> Login </h1>
      <button 
      onClick={async () => {
        if (services.getAllCourses()){
          setMessage(JSON.stringify(localStorage.getItem('AllCourses')));
        }
      }}> Get All Courses </button>
      <TextField
        value={search}
        label="Enter Search Term"
        onChange={(e) => {
          setSearch(e.target.value);
          setMessage(search);
        }} />
      <button 
      onClick={async () => {
        services.searchCourseBySubject(search);
        setMessage(JSON.stringify(localStorage.getItem('SearchResults')));
        
      }}> Search </button>
      <h2>{message}</h2>
    </>
    
  )
}

// const getCourses = createAsyncThunk('/courses', async () => {
//   try {
//     return await services.getAllCourses();
//   } catch (error) {
//     const message = (error.response && error.response.data.message && error.response.data) ||
//     error.message || error.toString()
//     console.log(message)
//   }
// })

export default Login