import axios from 'axios'
import qs from 'qs'

export const login = async (username: String, password: String, callback: Function) => {
  var data = qs.stringify({
    'Username': username,
    'Password': password,
  });
  var config = {
    method: 'post',
    url: 'http://localhost:8000/create/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
    data: data
  };
  let returnData;

  axios(config)
    .then(async function (response) {
      if (response.data) {
        //console.log(response.data);
        await callback(response.data);

      } else {
        callback('NothingFound');
      }



    })
    .catch(function (error) {
      console.log(error);
    });
}

export const register = async (username: String, email: String, password: String, country: String) => {
  var data = qs.stringify({
    'Username': username,
    'Email': email,
    'Password': password,
    'Country': country
  });
  var config = {
    method: 'post',
    url: 'http://localhost:8000/create/individualTrainee',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

export const registerInstructor = async (username: String, email: String, password: String, country: String, shortBio: String) => {
  var data = qs.stringify({
    'Username': username,
    'Email': email,
    'Password': password,
    'Country': country,
    'ShortBio': shortBio
  });
  var config = {
    method: 'post',
    url: 'http://localhost:8000/create/instructor',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

export const registerCorporate = async (username: String, email: String, password: String, country: String, corporate: String) => {
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
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

export const createGuestCookie = async () => {
  var config = {
    method: 'get',
    url: 'http://localhost:8000/cookie',
    headers: {
      withCredentials: true
    }

  };

  axios.get('http://localhost:8000/cookie', {
    withCredentials: true
  })
    .then(function (response) {
      localStorage.setItem('currentCookie', JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

export const editInstructorDetails = async (username: String, callback: Function, email?: String, bio?: String, ) => {
  var data = qs.stringify({
    'username': username,
    'email': email,
    'bio': bio
  });
  var config = {
    method: 'post',
    url: 'http://localhost:8000/create/editInstructor',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'userData=j%3A%7B%22id%22%3A%22%22%2C%22type%22%3A%22%22%2C%22Country%22%3A%22Egypt%22%7D'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      callback(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });

}

const services = {
  register,
  registerCorporate,
  registerInstructor,
  login,
  createGuestCookie,
  editInstructorDetails
}

export default services;