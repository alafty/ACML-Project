import axios from 'axios'
import qs from 'qs'

export const register = async(type: String, username: String, email: String, password: String, country: String) => {
    var data = qs.stringify({
      'Username': username,
      'Email': email,
      'Password': password,
      'Country': country
    });
    var config = {
      method: 'post',
      url: 'http://localhost:8000/create/' + type,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
}

export const registerCorporate = async(username: String, email: String, password: String, country: String, corporate: String) => {
  var data = qs.stringify({
    'Username': username,
    'Email': email,
    'Password': password,
    'Country': country,
    'Corporate': corporate
  });
  var config = {
    method: 'post',
    url: 'http://localhost:8000/create/corporateTrainee',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

const services = {
    register,
    registerCorporate
}

export default services;