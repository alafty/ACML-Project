import axios from "axios";
import qs from "qs";
import httpClient from "../utils/httpClient";

const COURSES_URL = "/courses";
export const getAllCourses = async () => {
  const response = await httpClient.get(COURSES_URL);
  console.log(JSON.stringify(response));

  if (response.data) {
    localStorage.setItem("AllCourses", JSON.stringify(response.data));
  } else {
    localStorage.setItem("AllCourses", "Nothing Found");
  }
  return response.data;
};

export const searchCourseBySubject = async (searchTerm: String) => {
  var data = qs.stringify({
    searchTerm: searchTerm,
  });
  var config = {
    method: "post",
    url: `${COURSES_URL}/search`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response));

      if (response.data) {
        localStorage.setItem("SearchResults", JSON.stringify(response.data));
      } else {
        localStorage.setItem(
          "SearchResults",
          `No search items found ${searchTerm}`
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getCourseDetails = async (id: string) => {
  var data = qs.stringify({
    id: id,
  });

  const response = await httpClient.post(`${COURSES_URL}/id`, data);

  return response.data;
};
const getCourseQuizzes = async (Course: string) => {
  
  const Body = {
    Course: Course,
    
}
const data:[String] = [''];
axios.post('http://localhost:8000/quiz/getCourseQuizzes',Body)
.then(res=>console.log(res.data = data)); 

return data;

 


};


// const uploadCourseVideo = (id: string, ) => {

// }


export const rateCourses = async (searchTerm: String) => {
  var data = qs.stringify({
  searchTerm: searchTerm
});
  var config = {
  method: 'post',
  url: 'http://localhost:8000/courses/search',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': 'userData=j%3A%7B%22Country%22%3A%22Egypt%22%7D'
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

const Services = {
  getAllCourses,
  searchCourseBySubject,
    rateCourses,
  getCourseDetails,
  getCourseQuizzes
};

export default Services;