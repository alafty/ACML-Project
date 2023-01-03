import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";



    
const viewInstructors = ()=> {
const [Instructors,setInstructors] = useState([]);

    const getinstructors = async ()=> {
        const response = await httpClient.get('/create/instructor');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
        
    useEffect(() => {
        const showinstructors = async () => {
          const data = await getinstructors();
         
          setInstructors(data);
          console.log(Instructors);
          
        }
        showinstructors();
      }, []);
    
    return (
        <div>
                 <h1>All Instructors</h1>
            
        
             {Instructors.map((instructor)=>(
                
                <table >
                    <thead >
                        <tr>
                        <th>Username</th> <br></br>
                        <th>Email</th> <br></br>
                        <th>Short Bio</th> <br></br>
                     

                         
                        </tr>
                    </thead>
                    <tbody>
         <tr>
           <td>{instructor.Username}</td> <br></br>
           <td>{instructor.Email}</td> <br></br>
           <td>{instructor.ShortBio}</td> <br></br>
 

           
           
         </tr>     
         </tbody> 
                
                   <button >update</button>  
                   <button >delete</button>
                </table>
                  ))}
                                 

                  </div>
              )
            
          }
export default viewInstructors