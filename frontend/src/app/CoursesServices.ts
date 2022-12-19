import axios from 'axios'
import qs from 'qs'

export const getAllCourses = async () => {
    const response = await axios.get('/courses');
    console.log(JSON.stringify(response));
    
    if(response.data){
        localStorage.setItem('AllCourses', JSON.stringify(response.data));
    }else{
        localStorage.setItem('AllCourses', "Nothing Found");
    }
    return response.data
} 



export const searchCourseBySubject = async (searchTerm: String) => {
    
    var data = qs.stringify({
        searchTerm: searchTerm 
      });
    var config = {
        method: 'post',
        url: '/courses/search',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response));
        
        if(response.data){
                 localStorage.setItem('SearchResults', JSON.stringify(response.data));
             } else {
                 localStorage.setItem('SearchResults', `No search items found ${searchTerm}`);
             }
      })
      .catch(function (error) {
        console.log(error);
      });

    // return response.data
}

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

const services = {
    getAllCourses,
    searchCourseBySubject,
    rateCourses,
}

export default services;