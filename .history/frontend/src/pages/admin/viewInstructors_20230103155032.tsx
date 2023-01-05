import React ,{useEffect, useState,Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";



    
function ViewInstructors  (props){
const [Instructors,setInstructors] = useState([]);

    const getinstructors = async ()=> {
        const response = await httpClient.get('/create/instructor');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
    const deleteInstrucor = (instructor) => {
        console.log(instructor)
        axios.delete('http://localhost:8000/create/instructor',{ data: instructor })
      }
    useEffect(() => {
        const showinstructors = async () => {
          const data = await getinstructors();
         
          setInstructors(data);
          //console.log(Instructors);
          
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
            <Link to={{pathname: "/updateInstructor",state:"Hello"}}>   
                   <button >update</button> 
                   </Link>  
                   <button onClick={()=>deleteInstrucor(instructor)} >delete</button>
                </table>
                  ))}
                <Link to="/createInstructor">create Instructor</Link> <br />   
                  </div>
              )
            
          }
export default ViewInstructors