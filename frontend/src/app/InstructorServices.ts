import axios from 'axios'
import qs from 'qs'
import httpClient from '../utils/httpClient';

const INSTRUCTOR_URL = "/instructor";

export const getInstructorData = async (instructorID: String) => { 
    var data = qs.stringify({
        id: instructorID 
    });
    const response = await httpClient.post(`${INSTRUCTOR_URL}/getData`, data);

    return response.data;
}

const Services = {
    getInstructorData,
}

export default Services;