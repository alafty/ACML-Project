import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";


function ViewCorps  (){
const [Corps,setCorps] = useState([]);


    const getcorps = async ()=> {
        const response = await httpClient.get('/create/corps');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
   
    useEffect(() => {
        const showcorps = async () => {
          const data = await getcorps();
         
          setCorps(data);
          
        }
        showcorps();
      }, []);
     
    return (
        <div>
            <h1>All Corporates </h1>


            {Corps.map((corp) => (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th> <br></br>
                            <th>Email</th> <br></br>
                            <th>Industry</th> <br></br>
                            <th>Package ID</th> <br></br>





                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{corp.Name}</td> <br></br>
                            <td>{corp.Email}</td> <br></br>
                            <td>{corp.Industry}</td> <br></br>
                            <td>{corp.PackageID}</td> <br></br>



                        </tr>
                    </tbody>
                   
                    
                </table>
            ))}
            <Link to="/createAdmin">Create Admin </Link> <br />
        </div>
            
              );
            } 
          
export default ViewAdmins


