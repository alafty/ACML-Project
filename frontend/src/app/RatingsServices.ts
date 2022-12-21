import axios from 'axios'
import qs from 'qs'

export const rateCourse = async (courseID: String, rating: number) => {
    var data = qs.stringify({
    id: courseID,
    rating: rating
  });
    var config = {
    method: 'post',
    url: 'http://localhost:8000/courses/rate',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    if(response.data){
      localStorage.setItem('rateCourse', JSON.stringify(response.data));
  }else{
      localStorage.setItem('rateCourse', "Nothing Found");
  }
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  export const rateInstructor = async (instructorID: String, rating: String) => {
    var data = qs.stringify({
    id: instructorID,
    rating: rating
  });
    var config = {
    method: 'post',
    url: 'http://localhost:8000/instructor/rate',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    if(response.data){
      localStorage.setItem('rateInstructor', JSON.stringify(response.data));
  }else{
      localStorage.setItem('rateInstructor', "Nothing Found");
  }
  })
  .catch(function (error) {
    console.log(error);
  });
  }

const Services = {
    rateCourse,
    rateInstructor
}

export default Services;