import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";


function ViewAdmins  (){
const [Admins,setAdmins] = useState([]);


    const getadmins = async ()=> {
        const response = await httpClient.get('/create/admin');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
   
    useEffect(() => {
        const showadmins = async () => {
          const data = await getadmins();
         
          setAdmins(data);
          //console.log(Instructors);
          
        }
        showadmins();
      }, []);
     
    return (
        <div>
            <h1>All Admins </h1>


            {Admins.map((admin) => (
                <table>
                    <thead>
                        <tr>
                            <th>Username</th> <br></br>
                            <th>Email</th> <br></br>



                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{admin.Username}</td> <br></br>
                            <td>{admin.Email}</td> <br></br>



                        </tr>
                    </tbody>
                   
                    
                </table>
            ))}
            <Link to="/createAdmin">Create Admin </Link> <br />
        </div>
            
              );
            } 
          
export default ViewAdmins


