import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";



    
const ViewProblems = ()=> {
const [problems,setProblems] = useState([]);

    const getproblems = async ()=> {
        const response = await httpClient.get('/create/problem');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
        
    useEffect(() => {
        const showproblems = async () => {
          const data = await getproblems();
         
          setProblems(data);
          console.log(problems);
          
        }
        showproblems();
      }, []);
      const resolveProblem = (problem) => {
        axios.put('http://localhost:8000/create/resolveProblem',problem.Type)
      }
      const holdProblem = (problem) => {
        axios.put('http://localhost:8000/create/holdProblem',problem.Type)
      }
    return (
        <div>
                 <h1>All problems</h1>
            
        
             {problems.map((problem)=>(
                
                <table >
                    <thead >
                        <tr>
                        <th>Type</th> <br></br>
                        <th>Description</th> <br></br>
                        <th>Status</th> <br></br>
                        <th>Course</th> <br></br>
                        <th>Sender</th> <br></br>

                         
                        </tr>
                    </thead>
                    <tbody>
         <tr>
           <td>{problem.Type}</td> <br></br>
           <td>{problem.Description}</td> <br></br>
           <td>{problem.Status}</td> <br></br>
           <td>{problem.Course}</td> <br></br>
           <td>{problem.Sender}</td> <br></br>

           
           
         </tr>     
         </tbody> 
                
                   <button onClick={()=>resolveProblem(problem)}>resolve</button>  
                   <button onClick={()=>holdProblem(problem)}>pending</button>
                </table>
                  ))}
                                 

                  </div>
              )
            
          }
export default ViewProblems