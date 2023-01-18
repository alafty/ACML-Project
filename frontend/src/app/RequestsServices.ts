import axios from 'axios'
import qs from 'qs'

export const createCourseRequest = async (traineeID: String, courseID: String, corporateID: String) => {
    var data = qs.stringify({
        'traineeID': traineeID,
        'courseID': courseID,
        'corporateID': corporateID
    });
    var config = {
        method: 'post',
        url: 'http://localhost:8000/requests/create',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
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

export const fetchCorporateRequests = async (corporateID: String) => {
    var data = qs.stringify({
        'corporateID': corporateID
    });
    var config = {
        method: 'post',
        url: 'http://localhost:8000/requests/fetch',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    let returnArray =  await axios(config);
    console.log(returnArray.data);
    return returnArray.data;

}

export const acceptRequest = async (traineeID: String, courseID: string, id: string) => {
    var data = qs.stringify({
        'TraineeID': traineeID,
        'CourseID': courseID,
        'id': id
    });
    var config = {
        method: 'delete',
        url: 'http://localhost:8000/requests/accept',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    let res =  await axios(config);
    console.log(res.data);
    return res.data;

}

export const rejectRequest = async (reqID: String) => {
    var data = qs.stringify({
        '_id': reqID,
    });
    var config = {
        method: 'delete',
        url: 'http://localhost:8000/requests/reject',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    let res =  await axios(config);
    console.log(res.data);
    return res.data;

}

const Services = {
    createCourseRequest,
    fetchCorporateRequests,
    rejectRequest,
    acceptRequest
}

export default Services;