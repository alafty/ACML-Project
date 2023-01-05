import axios from "axios";
import qs from "qs";
import { getTokenHeader, setToken } from "../utils/authUtils";
import httpClient from "../utils/httpClient";

export const login = async (
  email: String,
  password: String,
  callback: Function
) => {
  var data = qs.stringify({
    Email: email,
    Password: password,
  });
  var config = {
    method: "post",
    url: "create/login",
    data: data,
  };


  httpClient(config)
    .then(async function (response) {
      if (response.data.message) {
        callback(response.data.message, true);
        
      } else {
        setToken(response.data.token);
        await callback(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
      callback(error.response.data.message, true);
    });
    
    
};

export const register = async (
  username: String,
  email: String,
  password: String,
  LoginCallback: any
) => {
  var data = qs.stringify({
    Username: username,
    Email: email,
    Password: password,
  });
  var config = {
    method: "post",
    url: "/create/individualTrainee",
    data: data,
  };

  httpClient(config)
    .then(function (response) {
      setToken(response.data.token);
      LoginCallback(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const registerInstructor = async (
  username: String,
  email: String,
  password: String,
  shortBio: String
) => {
  var data = qs.stringify({
    Username: username,
    Email: email,
    Password: password,
    ShortBio: shortBio,
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

export const registerCorporate = async (
  username: String,
  email: String,
  password: String,
  country: String,
  corporate: String
) => {
  var data = qs.stringify({
    Username: username,
    Email: email,
    Password: password,
    Country: country,
    Corporate: corporate,
  });
  var config = {
    method: "post",
    url: "/create/corporateTrainee",
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

export const createGuestCookie = async () => {


  httpClient.
    get("/cookie", {
      withCredentials: true,
    })
    .then(function (response) {
      localStorage.setItem("currentCookie", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const editInstructorDetails = async (
  username: String,
  callback: Function,
  email?: String,
  bio?: String
) => {
  var data = qs.stringify({
    username: username,
    email: email,
    bio: bio,
  });
  var config = {
    method: "post",
    url: "/create/editInstructor",
    data: data,
  };

  httpClient(config)
    .then(function (response) {
      callback(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const testFunciton = async () => {
  const data = qs.stringify({
    Username: "taku",
  });
  httpClient
    .post("/instructor/edit", data, {
      headers: { ...getTokenHeader() },
    })
    .then((response) => {
      console.log(response);
    });
};

const logout = async () => {
  localStorage.removeItem('token');
}

const services = {
  register,
  registerCorporate,
  registerInstructor,
  login,
  logout,
  createGuestCookie,
  editInstructorDetails,
};

export default services;
