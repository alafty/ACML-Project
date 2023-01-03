import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";


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
        
        
        return (
            

             <div>  
             <TextField label="Email"  required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />
         
               
                <input type= "text" name="Email" required={true} placeholder="Enter email" ></input>
                <input type= "text" name="Password" required={true} placeholder="Enter password" ></input>
                <button type="submit">Create</button>
         
            </div>  
            
        )
      
    }
    export default CreateAdmin