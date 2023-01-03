import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import qs from "qs";
import httpClient from "../../utils/httpClient";
import { setToken } from "../../utils/authUtils";


const CreateAdmin = ()=> {

    const [AddFormData,setAddFormData] = useState({
        
        Email:'',
        Password:''
    });
    const createusers = (event)=> {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue= event.target.value;
        const newFormData = {...AddFormData};
        newFormData[fieldName]= fieldValue;
        setAddFormData(newFormData);
        console.log(newFormData);
        try {
            const response =  axios({
              method: "post",
              url: "http://localhost:8000/create/admin",
              data: newFormData,
              headers: { "Content-Type": "multipart/form-data" },
            });
          } catch(error) {
            console.log(error)
          }
          
        }
        const [Email,setEmail]=useState('')
        const [Password,setPassword]= useState('')
        
        const createAdmin = async (
           
            email: String,
            password: String,
          
          ) => {
            var data = qs.stringify({
        
              Email: email,
              Password: password,
          
            });
            var config = {
              method: "post",
              url: "/create/admin",
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
         
               
         <Button 
        variant="contained" 
    
       
        onClick={async () => {
        
           createAdmin(Email,Password);
          
          
          
        }}
        > Create </Button>
         
            </div>  
            
        )
      
    }
    export default CreateAdmin