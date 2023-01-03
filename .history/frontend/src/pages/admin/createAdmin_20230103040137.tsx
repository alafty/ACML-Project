import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
      
        
        
        return (
            

             <div>  
            
            <form onSubmit={createusers}>
               
                <input type= "text" name="Email" required={true} placeholder="Enter email" ></input>
                <input type= "number" name="id" required={true} placeholder="Enter id" ></input>
                <button type="submit">Create</button>
            </form>
            </div>  
            
        )
      
    }
    export default CreateAdmin