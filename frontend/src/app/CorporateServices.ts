import axios from 'axios'

export const fetchCorporates = async () => {
    var config = {
    method: 'get',
    url: 'http://localhost:8000/corps/getAll',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  }



const Services = {
    fetchCorporates
}

export default Services;