import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SolveExercises() {
  const [questions,setQuestions] = useState([]);
const getQuestions = async ()=> {
      await axios.post('http://localhost:8000/Quiz/getQuiz').then((res)=>{console.log(res)
        const fetchedQuestions= res.data
        setQuestions(fetchedQuestions)
        console.log(fetchedQuestions)
    }
      
      )
     
    }
    ;
  return (
    <div>SolveExercises</div>
  )
}
