import axios from 'axios'

export const getAllCourses = async () => {
    const response = await axios.get('/courses');
    if(response.data){
        localStorage.setItem('AllCourses', JSON.stringify(response.data));
    }

    return response.data
} 

const services = {
    getAllCourses
}

export default services;