import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";


function ViewITrainees  (){
const [ITrainees,setITrainees] = useState([]);


    const getitrainees = async ()=> {
        const response = await httpClient.get('/create/individualTrainee');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
   
    useEffect(() => {
        const showitrainees = async () => {
          const data = await getitrainees();
         
          setITrainees(data);
          
        }
        showitrainees();
      }, []);
     
    return (
        <div>
            <h1>All Individual Trainees </h1>


            {ITrainees.map((itrainee) => (
                <table>
                    <thead>
                        <tr>
                            <th>Username</th> <br></br>
                            <th>Email</th> <br></br>
                            <th>Wallet</th> <br></br>





                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{itrainee.Username}</td> <br></br>
                            <td>{itrainee.Email}</td> <br></br>
                            <td>{itrainee.Wallet}</td> <br></br>



                        </tr>
                    </tbody>
                   
                    
                </table>
            ))}
            <Link to="/createindivTrainee">Create Individual Trainee</Link> <br />
        </div>
            
              );
            } 
          
export default ViewITrainees


