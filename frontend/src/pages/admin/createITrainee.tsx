import React ,{useState} from "react";
import { Button, TextField } from "@mui/material";
import qs from "qs";
import httpClient from "../../utils/httpClient";
import { setToken } from "../../utils/authUtils";


const CreateITrainee = ()=> {

  
        const [Username,setUsername] = useState('')
        const [Email,setEmail]=useState('')
        const [Password,setPassword]= useState('')
    
        
        const CreateInstructor = async (
            username:String,
            email: String,
            password: String,
        
          
          ) => {
            var data = qs.stringify({
              Username : username,
              Email: email,
              Password: password,
        
          
            });
            var config = {
              method: "post",
              url: "/create/individualTrainee",
              data: data,
            };
          
            httpClient(config)
              .then(function (response) {
                setToken(response.data.token);
              })
              .catch(function (error) {
                console.log(error);
              });
          };
        return (
            

             <div> 
                 <TextField label="Username"  required={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          /> <br />
             <TextField label="Email"  required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          /> <br />
           <TextField label="Password"  required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          /> <br />
         
               
         <Button 
        variant="contained" 
    
       
        onClick={async () => {
        
           CreateInstructor(Username,Email,Password);
          
          
          
        }}
        > Create </Button>
         
            </div>  
            
        )
      
    }
    export default CreateITrainee