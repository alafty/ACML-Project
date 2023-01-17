import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import qs from "qs";


function ViewCTrainees  (){
const [CTrainees,setCTrainees] = useState([]);


    const getctrainees = async ()=> {
        const response = await httpClient.get('/create/corporateTrainee');

        if (response.data) {
          return response.data;
        }
      
        return {};
     
    }
    const deleteTrainee = (trainee) => {
        console.log(trainee)
        axios.delete('http://localhost:8000/create/corporateTrainee',{ data: trainee })
      }
    useEffect(() => {
        const showctrainees = async () => {
          const data = await getctrainees();
         
          setCTrainees(data);
          
        }
        showctrainees();
      }, []);
     
    return (
        <div>
            <h1>All Corporate Trainees </h1>


            {CTrainees.map((ctrainee) => (
                <table>
                    <thead>
                        <tr>
                            <th>Username</th> <br></br>
                            <th>Email</th> <br></br>
                            <th>Corporate</th> <br></br>
                            <th>Wallet</th> <br></br>





                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ctrainee.Username}</td> <br></br>
                            <td>{ctrainee.Email}</td> <br></br>
                            <td>{ctrainee.Corporate}</td> <br></br>
                            <td>{ctrainee.Wallet}</td> <br></br>



                        </tr>
                    </tbody>
                    <button onClick={() => deleteTrainee(ctrainee)}>delete</button>

                    
                </table>
            ))}
            <Link to="/createCorpTrainee">Create Corporate Trainee</Link> <br />
        </div>
            
              );
            } 
          
export default ViewCTrainees


