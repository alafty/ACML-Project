import axios from 'axios'
import qs from 'qs';
import { setToken } from '../utils/authUtils';
import httpClient from '../utils/httpClient';

const createAdmin = async (
    username:String,
    email: String,
    password: String
  
  ) => {
    var data = qs.stringify({
      Username : username,
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

  const createCorp = async (
    name:String,
    email: String,
    password: String,
    industry: String
  
  ) => {
    var data = qs.stringify({
      Username : name,
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

  const CreateInstructor = async (
    username:String,
    email: String,
    password: String,
    shortbio: String
  
  ) => {
    var data = qs.stringify({
      Username : username,
      Email: email,
      Password: password,
      ShortBio: shortbio
  
    });
    var config = {
      method: "post",
      url: "/create/instructor",
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

  const Services = { createAdmin, createCorp, CreateInstructor}

  export default Services;