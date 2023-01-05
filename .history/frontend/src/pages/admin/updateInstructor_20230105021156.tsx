import { Button, TextField } from "@mui/material";
import qs from "qs";
import { useState } from "react";
import httpClient from "../../utils/httpClient";
import { instruct } from "./viewInstructors";
function UpdateInstructor () {
 
        const [Username,setUsername] = useState('')
        const [Email,setEmail]=useState('')
        const [Password,setPassword]= useState('')
        const [Shortbio,setShortbio] = useState('')
        const [instructor,setInstructor] = useState(instruct[0])
        
        const updateInstructor = async (instructor,
            username:String,
            email: String,
            password: String,
            shortbio: String
          
          ) => {
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
          };
    return (
      
        <div> 
            <h1>{instructor.Username}</h1>
        <TextField label={instructor.Username}  required={true}
 onChange={(e) => {
   setUsername(e.target.value);
 }}
 /> <br />
  
<br />
      
<Button 
variant="contained" 


onClick={async () => {

  updateInstructor(instructor,Username,Email,Password,Shortbio);
 
 
 
}}
> update instructor </Button>

   </div>  
   
)
}
export default UpdateInstructor