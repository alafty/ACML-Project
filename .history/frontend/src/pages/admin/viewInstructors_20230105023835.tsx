import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";
import { Button, TextField } from "@mui/material";


var instruct = [];
function ViewInstructors  (props: any){
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
      const showUpdateInfo =(instructor) =>{
        instruct[0]= instructor
        console.log(instructor)
    
      } 
      const updateInstructor = (instructor,username) => {
       
        var data = qs.stringify({
            _id : instructor._id,
            Username : username,
         
        
          });
          var config = {
            method: "put",
            url: "/create/instructor",
            data: data,
          };
        
          httpClient(config)
            .then(function (response) {
             
            })
            .catch(function (error) {
              console.log(error);
            });
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


            {Instructors.map((instructor) => (
                <table>
                    <thead>
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
                    <Link to="/updateInstructor">
                        <button onClick={() => showUpdateInfo(instructor)}>update</button>
                        </Link>
                    <button onClick={() => deleteInstrucor(instructor)}>delete</button>
                </table>
            ))}
            <Link to="/createInstructor">create Instructor</Link> <br />
        </div>
            
              );
            } 
          
export default ViewInstructors
export {
    instruct
}

