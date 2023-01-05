import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";


var instruct = [];
function ViewInstructors  (props: any){
const [Instructors,setInstructors] = useState([]);
const [Username,setUsername] = useState('')
var showinstructors = true
var updateInfo = false

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
      const showUpdateInfo =() =>{
        showinstructors=false
        updateInfo=true
      } 
      const updateInstrucor = (instructor,username) => {
       
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
        <><div
            className="showInstructors"
            style={{ display: showinstructors ? "block" : "none" }}
        >
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
                    
                        <button onClick={showUpdateInfo}>update</button>
                    
                    <button onClick={() => deleteInstrucor(instructor)}>delete</button>
                </table>
            ))}
            <Link to="/createInstructor">create Instructor</Link> <br />
        </div>
            <div className="updateInfo"
            style={{ display: updateInfo ? "block" : "none" }}>
                <h1>Updateeee</h1>
            </div></>
              )
            
          }
export default ViewInstructors
export {
    instruct
}

