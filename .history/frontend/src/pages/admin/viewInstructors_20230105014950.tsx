import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";
import { Button, TextField } from "@mui/material";


var instruct = [];
function ViewInstructors  (props: any){
const [Instructors,setInstructors] = useState([]);
const [Username,setUsername] = useState('')
const [showinstructors,setShowinstructors] = useState(true)
const [updateInfo,setUpdateinfo] = useState(false)

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
        setShowinstructors(false)
        setUpdateinfo(true)
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

<Link to="/createInstructor">create Instructor</Link> <br />

            {Instructors.map((instructor) => (
                <><div className="showInstructors"
                    style={{ display: showinstructors ? "block" : "none" }}>
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

                </div><div className="updateInfo"
                    style={{ display: updateInfo ? "block" : "none" }}>
                        <h1>Updateeee</h1>
                        <TextField label="Username" required={true}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            } } />
                        <Button
                            variant="contained"
                            onClick={async () => {
                                updateInstructor(instructor, Username);



                            } }
                        > update data</Button>
                    </div></>
            ))}
            </div>
              );
            } 
          
export default ViewInstructors
export {
    instruct
}

