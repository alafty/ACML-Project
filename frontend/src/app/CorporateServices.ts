import axios from 'axios'
import qs from 'qs';

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
  export const changePackage = async (
    corp: String,
    Package: String
  ) => {
    var data = qs.stringify({
      id: corp,
      packageID: Package
    })
    var config = {
    method: 'post',
    url: 'http://localhost:8000/corps/changePackage',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
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
    fetchCorporates,
    changePackage
}

export default Services;