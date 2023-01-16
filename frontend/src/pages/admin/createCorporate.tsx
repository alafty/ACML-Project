import React ,{useState} from "react";
import { Button, TextField } from "@mui/material";
import qs from "qs";
import httpClient from "../../utils/httpClient";
import { setToken } from "../../utils/authUtils";
import { Link } from "react-router-dom";

const CreateCorporate = ()=> {

  
        const [Name,setName] = useState('')
        const [Email,setEmail]=useState('')
        const [Password,setPassword]= useState('')
        const [Industry,setIndustry]=useState('')
        
        const createCorp = async (
            name:String,
            email: String,
            password: String,
            industry: String
          
          ) => {
            var data = qs.stringify({
              Name : name,
              Email: email,
              Password: password,
              Industry : industry
          
            });
            var config = {
              method: "post",
              url: "/create/corporate",
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
                 <TextField label="Name"  required={true}
          onChange={(e) => {
            setName(e.target.value);
          }}
          /> 
             <TextField label="Email"  required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />
           <TextField label="Password"  required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
           <TextField label="Industry"  required={true}
          onChange={(e) => {
            setIndustry(e.target.value);
          }}
          />
         
         <Link to="/viewCorporates">    
         <Button 
        variant="contained" 
    
       
        onClick={async () => {
        
           createCorp(Name,Email,Password,Industry);
          
          
          
        }}
        > Create </Button>
         </Link>
            </div>  
            
        )
      
    }
    export default CreateCorporate