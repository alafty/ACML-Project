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
        const getproblems = async () => {
          const data = await getproblems();
         
          setProblems(problems);
        }
        getproblems();
      }, []);
    return (
        <div>
                 
            
        
             {problems.map((user)=>(
                
                <table >
                    <thead >
                        <tr>
                        <th>Name</th> <br></br>
                        <th>Email</th> <br></br>
                        <th>Id</th> <br></br>
                         
                        </tr>
                    </thead>
                    <tbody>
         <tr>
           <td>{user.Name}</td> <br></br>
           <td>{user.Email}</td> <br></br>
           <td>{user.id}</td> <br></br>
           
           
         </tr>     
         </tbody> 
                     
                </table>
                  ))}
                                 

                  </div>
              )
            
          }
export default ViewProblems