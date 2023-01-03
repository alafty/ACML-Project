import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



    
const ViewProblems = ()=> {
const [problems,setProblems] = useState([]);

    const getproblems = async ()=> {
        await axios.get('http://localhost:8000/create/problem').then((res)=>{console.log(res.data)
          return res.data
      } 
      )
     
    }
        
    useEffect(() => {
        const showproblems = async () => {
          const data = await getproblems();
         
          setProblems(problems);
        }
        showproblems();
      }, []);
    return (
        <div>
                 
            
        
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
                     
                </table>
                  ))}
                                 

                  </div>
              )
            
          }
export default ViewProblems