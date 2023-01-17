import axios from 'axios'
import qs from 'qs'
import httpClient from '../utils/httpClient';

const INSTRUCTOR_URL = "/instructor";

export const getInstructorData = async (instructorID: String) => { 
    var data = qs.stringify({
        id: instructorID 
    });
    const response = await httpClient.post(`${INSTRUCTOR_URL}/getData`, data);

    return response.data;
}

export const editInstructorDetails = async (
    email: String,
    callback: Function,
    newEmail?: String,
    bio?: String
  ) => {
    var data = qs.stringify({
      Email: email,
      newEmail: newEmail,
      bio: bio,
    });
    var config = {
      method: "post",
      url: "/instructor/editData",
      data: data,
    };


    httpClient(config) 
      .then(function (response) {
        console.log(response);
        callback(response.data.message);
        
      })
      .catch(function (error) {
        console.log(error);
      });
      return;
  };
  

const Services = {
    getInstructorData,
    editInstructorDetails
}

export default Services;