import React ,{useState} from "react";
import { Button, TextField } from "@mui/material";
import qs from "qs";
import httpClient from "../../utils/httpClient";
import { setToken } from "../../utils/authUtils";


const CreateCTrainee = ()=> {

  
        const [Username,setUsername] = useState('')
        const [Email,setEmail]=useState('')
        const [Password,setPassword]= useState('')
        const [Corporate,setCorporate] = useState('')
        
        const CreateInstructor = async (
            username:String,
            email: String,
            password: String,
            corporate: String
          
          ) => {
            var data = qs.stringify({
              Username : username,
              Email: email,
              Password: password,
              Corporate: corporate
          
            });
            var config = {
              method: "post",
              url: "/create/corporateTrainee",
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
          <TextField label="Corporate"  required={true}
          onChange={(e) => {
            setCorporate(e.target.value);
          }}
          />
         <br />
               
         <Button 
        variant="contained" 
    
       
        onClick={async () => {
        
           CreateInstructor(Username,Email,Password,Corporate);
          
          
          
        }}
        > Create </Button>
         
            </div>  
            
        )
      
    }
    export default CreateCTrainee